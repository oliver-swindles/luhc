// This file can be used to define types for data coming from Sanity
// It helps with type safety and autocompletion in your components.

// Based on your newsPost schema
export type NewsPost = {
  title: string;
  slug: string;
  mainImage?: {
    // Optional because of the fallback
    asset: any; // The raw asset reference
    alt: string;
  };
  excerpt: string;
};

// Based on your fixture schema
export type Fixture = {
  _id: string;
  dateAndTime: string;
  teamPlaying: string;
  opponent: string;
  locationType: string;
};
