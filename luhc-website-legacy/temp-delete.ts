import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'fixture',
  title: 'Fixture',
  type: 'document',
  fields: [
    defineField({
      name: 'dateAndTime',
      title: 'Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'team',
      title: 'LUHC Team',
      type: 'string',
      options: {
        list: [
          { title: "Men's 1s", value: "Mens 1s" },
          { title: "Men's 2s", value: "Mens 2s" },
          { title: "Men's 3s", value: "Mens 3s" },
          { title: "Women's 1s", value: "Womens 1s" },
          { title: "Women's 2s", value: "Womens 2s" },
          { title: "Women's 3s", value: "Womens 3s" },
          { title: "Development", value: "Development" },
          { title: "Other (custom)", value: "Other" }
        ]
      },
      description: "Pick the LUHC team, or choose Other to type a custom one",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'customTeam',
      title: 'Custom Team Name',
      type: 'string',
      description: "Only required if 'Other' is selected above",
      hidden: ({ parent }) => parent?.team !== 'Other',
      validation: (Rule) =>
        Rule.custom((fieldValue, context) => {
          if (context.parent?.team === 'Other' && !fieldValue) {
            return 'Custom team name is required when selecting Other'
          }
          return true
        })
    }),
    defineField({
      name: 'opponent',
      title: 'Opponent Team',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'locationType',
      title: 'Venue',
      type: 'string',
      options: {
        list: [
          { title: 'Home (Lancaster Uni Astro Pitch 1)', value: 'Home' },
          { title: 'Away', value: 'Away' }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'venueDetails',
      title: 'Venue Details (if Away)',
      type: 'string',
      hidden: ({ parent }) => parent?.locationType !== 'Away'
    }),
    defineField({
      name: 'seoName',
      title: 'SEO Match Title',
      type: 'string',
      description: '(Ignore this, it will autofill itself)',
      readOnly: true
    }),
    defineField({
      name: 'shortName',
      title: 'Short Match Title',
      type: 'string',
      description: '(Ignore this, it will autofill itself)',
      readOnly: true
    })
  ],
  preview: {
    select: {
      team: 'team',
      customTeam: 'customTeam',
      opponent: 'opponent',
      date: 'dateAndTime',
      venue: 'locationType'
    },
    prepare({ team, customTeam, opponent, date, venue }) {
      const baseTeam = team === 'Other' ? customTeam : team || 'Unknown'
      const dateObj = date ? new Date(date) : null
      const dateStr = dateObj
        ? dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })
        : 'No date'

      return {
        title: `${baseTeam} vs ${opponent || 'TBC'}`,
        subtitle: `${dateStr} • ${venue || 'TBC'}`
      }
    }
  }
})
