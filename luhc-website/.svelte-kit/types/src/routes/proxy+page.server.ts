// @ts-nocheck
// +page.server.ts
import { client } from '$lib/sanityClient';
import type { PageServerLoad } from './$types';

export const load = async () => {
  const upcomingFixtures = await client.fetch(
    `*[_type == "fixture" && dateAndTime >= now()] 
      | order(dateAndTime asc)[0...5]{
        _id,
        dateAndTime,
        team,
        customTeam,
        opponent,
        locationType,
        venueDetails
      }`
  );

  const totalFixtures = await client.fetch<number>(
    `count(*[_type == "fixture" && dateAndTime >= now()])`
  );

  return { upcomingFixtures, totalFixtures };
};
;null as any as PageServerLoad;