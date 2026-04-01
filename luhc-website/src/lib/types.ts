export interface Match {
  team: string;
  opponent: string;
  dateAndTime: string; // ISO String
  locationType: 'Home' | 'Away';
  venueDetails: string | undefined;
  score?: string;
}
