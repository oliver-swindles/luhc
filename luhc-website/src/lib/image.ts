import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import { client } from '$lib/sanityClient';

const builder = createImageUrlBuilder(client);

/**
 * A helper function to generate image URLs from Sanity image assets.
 * @param source The Sanity image asset data
 * @returns An image URL builder instance
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
