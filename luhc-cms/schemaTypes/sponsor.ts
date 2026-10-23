import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sponsor Title / Name',
      type: 'string',
      description: 'e.g., Red Bull, Local Pub, Gym Name',
      validation: (Rule) => Rule.required().error('A sponsor name is required'),
    }),
    defineField({
      name: 'logo',
      title: 'Sponsor Logo',
      type: 'image',
      description: 'High-res image (PNG with transparent background preferred)',
      options: {
        hotspot: true, // Enables visual cropping in Sanity Studio
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility and SEO (e.g., "Red Bull logo")',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required().error('A sponsor logo is required'),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'A brief 1-2 sentence summary of the sponsor or partnership offer for members.',
      validation: (Rule) => Rule.max(200).warning('Keep descriptions under 200 characters for optimal display'),
    }),
    defineField({
      name: 'link',
      title: 'Website or Social Media Link',
      type: 'url',
      description: 'Full URL including https:// (e.g., https://instagram.com/sponsor)',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'link',
      media: 'logo',
    },
  },
})