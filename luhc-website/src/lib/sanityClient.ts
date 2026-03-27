import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { PUBLIC_SANITY_DATASET } from '$env/static/public';
import { PUBLIC_SANITY_API_VERSION } from '$env/static/public';

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: PUBLIC_SANITY_API_VERSION || '2023-09-01',
  useCdn: true,
});
