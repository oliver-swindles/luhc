import { client } from '#lib/sanityClient.js';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  let sponsors: any[] = [];

  try {
    sponsors = await client.fetch(`
      *[_type == "sponsor"]{
        _id,
        name,
        description,
        link,
        logo
      }
    `);
  } catch (error) {
    console.error('Failed to load sponsors in layout server', error);
  }

  return {
    sponsors,
  };
};
