// schemaTypes/fixture.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'fixture',
  title: 'Fixture',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'opponent',
      title: 'Opponent',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'Format HH:mm (24hr)',
      validation: (Rule) => Rule.required()
    })
  ]
});
