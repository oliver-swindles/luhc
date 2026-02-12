export interface Match {
    team: string;         // e.g. "Men's 1s"
    opponent: string;     // e.g. "Durham 2s"
    date: string;         // ISO String for sorting
    time: string;         // Display time "14:00"
    isHome: boolean;
    location: string;     // "Pitch 1" or "Away"
    score?: string;       // "2-1" (Optional)
}

export interface GMSResponse {
    success: boolean;
    fixtures: Match[];
    results: Match[];
    lastUpdated: string;
}