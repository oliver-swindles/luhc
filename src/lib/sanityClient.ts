import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "7hdfuzec", // Find this in your sanity.json or at manage.sanity.io
  dataset: "production", // Or whichever dataset you're using
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2025-06-01", // Use a recent date
});
