import type { CollectionConfig } from 'payload'

export const Matches: CollectionConfig = {
  slug: 'matches',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data?.homeTeam && data?.awayTeam) {
              return `${data.homeTeam} vs ${data.awayTeam}`
            }
            return 'New Match'
          },
        ],
      },
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'homeTeam',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
    },
    {
      name: 'awayTeam',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
    },
    {
      name: 'homeScore',
      type: 'number',
    },
    {
      name: 'awayScore',
      type: 'number',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Live', value: 'live' },
        { label: 'Finished', value: 'finished' },
      ],
      defaultValue: 'upcoming',
      required: true,
    },
  ],
}
