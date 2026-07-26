import { error } from '@sveltejs/kit';
import { client } from '$lib/sanityClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  // Query SPECIFICALLY for the 'dev' document
  const query = `*[_type == "linksPage" && slug.current == "dev"][0]{
    title,
    description,
    sections[] { title, links[] { name, url } },
    socials[] { platform, url }
  }`;

  const pageData = await client.fetch(query);

  if (!pageData) {
    throw error(404, 'Links not found. Please create a document with slug "dev" in Sanity.');
  }

  return { pageData };
};
