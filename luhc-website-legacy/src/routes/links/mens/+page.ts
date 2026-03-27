import { error } from '@sveltejs/kit';
import { client } from '$lib/sanityClient';

export const load = async () => {
  // Query SPECIFICALLY for the 'mens' document
  const query = `*[_type == "linksPage" && slug.current == "mens"][0]{
    title,
    description,
    sections[] { title, links[] { name, url } },
    socials[] { platform, url }
  }`;

  const pageData = await client.fetch(query);

  if (!pageData) {
    throw error(404, 'Links not found. Please create a document with slug "mens" in Sanity.');
  }

  return { pageData };
};