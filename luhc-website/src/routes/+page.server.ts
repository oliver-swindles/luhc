import * as cheerio from 'cheerio';

export const load = async ({ setHeaders }) => {
  setHeaders({
    'cache-control': 'public, max-age=1800, s-maxage=1800'
  });

  const fixtures = [];
  const results = []; // NEW: Array for past results

  try {
    const clubId = "9308e015-ee1e-49a2-8140-3fc33dcc65cb";
    const baseUrl = "https://gmsfeed.co.uk/api/show";
    const params = new URLSearchParams({
      method: "api",
      club_id: clubId,
      show: "fixtures+results",
      whatson: "300",
      sort_by: "fixtureTime",
      options: "showGender:yes"
    });

    const url = `${baseUrl}?${params.toString()}`;
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json', 
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://www.luhc.co.uk/'
        }
    });
    
    if (!response.ok) return { fixtures: [], results: [] };

    const jsonResponse = await response.json();
    if (!jsonResponse.html) return { fixtures: [], results: [] };

    const $ = cheerio.load(jsonResponse.html);
    const rows = $('tr'); 
    const now = new Date();

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const cols = $(row).find('td');
      if (cols.length === 0) continue;

      const dateStr = $(cols[0]).text().trim(); 
      const timeStr = $(cols[1]).text().trim(); 
      const homeTeam = $(cols[2]).text().trim();
      const scoreStr = $(cols[3]).text().trim(); // NEW: Capture Score (e.g. "4 : 1")
      const awayTeam = $(cols[4]).text().trim();
      const venue = $(cols[5]).text().trim();

      if (!dateStr || !homeTeam) continue;

      const fullDate = new Date(`${dateStr} ${timeStr}`);

      // Normalize Names
      const isHome = homeTeam.includes("Lancaster University");
      const ourTeamRaw = isHome ? homeTeam : awayTeam;
      const opponentName = isHome ? awayTeam : homeTeam;

      let teamName = "LUHC Team";
      if (ourTeamRaw.includes("1 (M)")) teamName = "Mens 1s";
      else if (ourTeamRaw.includes("2 (M)")) teamName = "Mens 3s";
      else if (ourTeamRaw.includes("3 (M)")) teamName = "Mens 3s";
      else if (ourTeamRaw.includes("1 (F)")) teamName = "Womens 1s";
      else if (ourTeamRaw.includes("2 (F)")) teamName = "Womens 3s";
      else if (ourTeamRaw.includes("3 (F)")) teamName = "Womens 3s";
      else if (ourTeamRaw.includes("Development")) teamName = "Dev Squad";
      else teamName = "Mixed/Other";

      const matchObj = {
        team: teamName,
        opponent: opponentName,
        dateAndTime: fullDate.toISOString(),
        locationType: isHome ? 'Home' : 'Away',
        venueDetails: isHome ? undefined : venue,
        score: scoreStr // Add score to object
      };

      // SPLIT LOGIC:
      // If date is in future -> Fixture
      // If date is in past AND has a score -> Result
      if (fullDate >= now) {
        fixtures.push(matchObj);
      } else if (scoreStr && scoreStr.includes(':')) {
        results.push(matchObj);
      }
    }

    // Sort Fixtures: Soonest -> Latest
    fixtures.sort((a, b) => new Date(a.dateAndTime).getTime() - new Date(b.dateAndTime).getTime());
    
    // Sort Results: Latest -> Oldest (So we see recent games first)
    results.sort((a, b) => new Date(b.dateAndTime).getTime() - new Date(a.dateAndTime).getTime());

  } catch (err) {
    console.error('CRITICAL ERROR in load function:', err);
    return { fixtures: [], results: [] };
  }

  // Return top 8 results for the ticker
  return { fixtures, results: results.slice(0, 8) };
};