import * as cheerio from 'cheerio';
import type { Match, GMSResponse } from '$lib/types/hockey';

const CLUB_ID = "9308e015-ee1e-49a2-8140-3fc33dcc65cb";
const BASE_URL = "https://gmsfeed.co.uk/api/show";

export async function fetchGMSData(fetchFn: typeof fetch): Promise<GMSResponse> {
    const params = new URLSearchParams({
        method: "api",
        club_id: CLUB_ID,
        show: "fixtures+results",
        whatson: "300", // 300 days lookahead/behind
        sort_by: "fixtureTime",
        options: "showGender:yes"
    });

    try {
        // 1. Fetch with timeout (Speed is a feature)
        const response = await fetchFn(`${BASE_URL}?${params.toString()}`, {
            signal: AbortSignal.timeout(4000)
        });

        if (!response.ok) throw new Error('GMS Unreachable');

        const json = await response.json();
        if (!json.html) throw new Error('No HTML in GMS response');

        // 2. Parse
        const $ = cheerio.load(json.html);
        const fixtures: Match[] = [];
        const results: Match[] = [];
        const now = new Date();

        $('tr').each((_, row) => {
            const cols = $(row).find('td');
            if (cols.length === 0) return;

            const dateStr = $(cols[0]).text().trim();
            const timeStr = $(cols[1]).text().trim();
            const homeTeam = $(cols[2]).text().trim();
            const scoreStr = $(cols[3]).text().trim();
            const awayTeam = $(cols[4]).text().trim();
            const venue = $(cols[5]).text().trim();

            if (!dateStr || !homeTeam) return;

            // Parse Date
            const fullDate = new Date(`${dateStr} ${timeStr}`);
            if (isNaN(fullDate.getTime())) return;

            // Normalize Data
            const isHome = homeTeam.includes("Lancaster University");
            const teamRaw = isHome ? homeTeam : awayTeam;
            const opponent = isHome ? awayTeam : homeTeam;
            
            const match: Match = {
                team: normalizeTeamName(teamRaw),
                opponent: opponent,
                date: fullDate.toISOString(),
                time: timeStr,
                isHome: isHome,
                location: isHome ? 'Pitch 1' : (venue || 'Away'),
                score: scoreStr.includes(':') ? scoreStr : undefined
            };

            // Categorize
            if (fullDate >= now) {
                fixtures.push(match);
            } else if (match.score) {
                results.push(match);
            }
        });

        // Sort: Fixtures (Soonest first), Results (Latest first)
        fixtures.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return {
            success: true,
            fixtures,
            results,
            lastUpdated: new Date().toISOString()
        };

    } catch (error) {
        console.error("GMS Scraper Error:", error);
        return { success: false, fixtures: [], results: [], lastUpdated: new Date().toISOString() };
    }
}

function normalizeTeamName(raw: string): string {
    if (raw.includes("1 (M)")) return "Men's 1s";
    if (raw.includes("2 (M)")) return "Men's 2s";
    if (raw.includes("3 (M)")) return "Men's 3s";
    if (raw.includes("1 (F)")) return "Women's 1s";
    if (raw.includes("2 (F)")) return "Women's 2s";
    if (raw.includes("3 (F)")) return "Women's 3s";
    if (raw.includes("Development")) return "Dev Squad";
    return "LUHC XI";
}