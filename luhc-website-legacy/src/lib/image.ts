import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./sanityClient"; // Assumes your client is in 'src/lib/sanityClient.ts'

const builder = imageUrlBuilder(client);

/**
 * A helper function to generate image URLs from Sanity image assets.
 * @param source The Sanity image asset data
 * @returns An image URL builder instance
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
