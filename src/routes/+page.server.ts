// src/routes/+page.server.ts

import { client } from "$lib/sanityClient";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  // We combine both queries into one object to make a single fetch request
  const query = `{
    "upcomingFixtures": *[_type == "fixture" && dateAndTime > now()] | order(dateAndTime asc) [0...6] {
      _id,
      dateAndTime,
      // --- FIX IS HERE ---
      // Use a GROQ projection to select the correct team name.
      // If team is 'Other', use otherTeamName, otherwise use the selected team.
      "teamPlayingName": select(teamPlaying.team == "Other" => teamPlaying.otherTeamName, teamPlaying.team),
      opponent,
      locationType
    },
    "latestNews": *[_type == "newsPost"] | order(publishedAt desc) [0...4] {
      title,
      "slug": slug.current,
      mainImage {
        asset,
        alt
      },
      excerpt
    }
  }`;

  const data = await client.fetch(query);

  return {
    upcomingFixtures: data.upcomingFixtures,
    latestNews: data.latestNews,
  };
};
