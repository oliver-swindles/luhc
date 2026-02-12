import * as cheerio from 'cheerio';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders, fetch }) => {
  // 1. PERFORMANCE: Cache this data at the edge for 15 minutes (900s).
  // If 1,000 users visit, you only hit GMS once.
  setHeaders({
    'cache-control': 'public, max-age=900, s-maxage=900'
  });

  const fixtures: any[] = [];
  const results: any[] = [];

  try {
    // 2. CONFIG: Your Club ID
    const clubId = "9308e015-ee1e-49a2-8140-3fc33dcc65cb";
    const baseUrl = "https://gmsfeed.co.uk/api/show";
    const params = new URLSearchParams({
      method: "api",
      club_id: clubId,
      show: "fixtures+results",
      whatson: "300", // Look 300 days ahead/behind to catch everything
      sort_by: "fixtureTime",
      options: "showGender:yes"
    });

    // 3. SAFETY: Timeout after 4 seconds. 
    // If GMS is down, we don't want your homepage to hang.
    const response = await fetch(`${baseUrl}?${params.toString()}`, {
        signal: AbortSignal.timeout(4000) 
    });
    
    if (!response.ok) throw new Error('GMS Feed Unreachable');

    const jsonResponse = await response.json();
    if (!jsonResponse.html) throw new Error('GMS returned no HTML');

    // 4. PARSING: The same logic, but wrapped safely
    const $ = cheerio.load(jsonResponse.html);
    const rows = $('tr'); 
    const now = new Date();

    rows.each((i, row) => {
        const cols = $(row).find('td');
        if (cols.length === 0) return;

        const dateStr = $(cols[0]).text().trim(); 
        const timeStr = $(cols[1]).text().trim(); 
        const homeTeam = $(cols[2]).text().trim();
        const scoreStr = $(cols[3]).text().trim(); 
        const awayTeam = $(cols[4]).text().trim();
        const venue = $(cols[5]).text().trim();

        if (!dateStr || !homeTeam) return;

        // Parse Date safely
        const fullDate = new Date(`${dateStr} ${timeStr}`);
        if (isNaN(fullDate.getTime())) return; // Skip invalid dates

        // Normalize Names (Cleaner UI)
        const isHome = homeTeam.includes("Lancaster University");
        const ourTeamRaw = isHome ? homeTeam : awayTeam;
        const opponentName = isHome ? awayTeam : homeTeam;
        const teamName = normalizeTeamName(ourTeamRaw);

        const matchObj = {
            team: teamName,
            opponent: opponentName,
            dateAndTime: fullDate.toISOString(),
            locationType: isHome ? 'Home' : 'Away',
            venueDetails: isHome ? undefined : venue,
            score: scoreStr
        };

        // Logic: Future = Fixture, Past + Score = Result
        if (fullDate >= now) {
            fixtures.push(matchObj);
        } else if (scoreStr && scoreStr.includes(':')) {
            results.push(matchObj);
        }
    });

    // Sort Fixtures: Soonest -> Latest
    fixtures.sort((a, b) => new Date(a.dateAndTime).getTime() - new Date(b.dateAndTime).getTime());
    
    // Sort Results: Latest -> Oldest (So we see recent games first)
    results.sort((a, b) => new Date(b.dateAndTime).getTime() - new Date(a.dateAndTime).getTime());

    return { 
        fixtures, 
        results: results.slice(0, 8), // Only show top 8 results in ticker
        success: true 
    };

  } catch (err) {
    console.error('⚠️ GMS Load Failed:', err);
    // 5. FAILOVER: Return empty data so the site loads (just without stats)
    return { fixtures: [], results: [], success: false };
  }
};

// Helper to make names look "Pro"
function normalizeTeamName(raw: string) {
    if (raw.includes("1 (M)")) return "Men's 1s";
    if (raw.includes("2 (M)")) return "Men's 2s";
    if (raw.includes("3 (M)")) return "Men's 3s";
    if (raw.includes("1 (F)")) return "Women's 1s";
    if (raw.includes("2 (F)")) return "Women's 2s";
    if (raw.includes("3 (F)")) return "Women's 3s";
    if (raw.includes("Development")) return "Dev Squad";
    return "LUHC XI";
}