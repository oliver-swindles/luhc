import { client } from "$lib/sanityClient";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  // We combine both queries into one object to make a single fetch request
  const query = `{
    "upcomingFixtures": *[_type == "fixture" && dateAndTime > now()] | order(dateAndTime asc) [0...6] {
      _id,
      dateAndTime,
      teamPlaying,
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
