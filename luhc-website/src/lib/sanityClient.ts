import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID!,
  dataset: import.meta.env.VITE_SANITY_DATASET!,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2023-09-01',
  useCdn: true // true enables free, fast, cached reads
});
