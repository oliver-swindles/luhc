import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'linksPage',
  title: 'Links Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'e.g. Lancaster Uni Men\'s Hockey',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'DO NOT EDIT!',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    // defineField({
    //   name: 'logo',
    //   title: 'Logo',
    //   type: 'image',
    //   options: { hotspot: true },
    // }),
    defineField({
      name: 'sections',
      title: 'Link Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'link',
                  title: 'Link',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Link Name',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
                    }),
                    // Optional: Add support for "featured" links with images later if needed
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'url'
                    }
                  }
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
        name: 'socials',
        title: 'Social Media Icons',
        type: 'array',
        of: [
            {
                type: 'object',
                fields: [
                    defineField({
                        name: 'platform',
                        title: 'Platform',
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Instagram', value: 'instagram' },
                                { title: 'TikTok', value: 'tiktok' },
                                { title: 'Facebook', value: 'facebook' },
                                { title: 'Twitter/X', value: 'twitter' },
                                { title: 'YouTube', value: 'youtube' },
                                { title: 'Email', value: 'email' }
                            ]
                        }
                    }),
                    defineField({
                        name: 'url',
                        title: 'URL',
                        type: 'url'
                    })
                ]
            }
        ]
    })
  ],
})