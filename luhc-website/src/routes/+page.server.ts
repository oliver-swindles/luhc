import { client } from '$lib/sanityClient';

export async function load() {
  const upcomingFixtures = await client.fetch(`
    *[_type == "fixture" && date >= now()] | order(date asc)[0...5]{
      date,
      team,
      opponent,
      venue,
      time
    }
  `);

  return { upcomingFixtures };
}
