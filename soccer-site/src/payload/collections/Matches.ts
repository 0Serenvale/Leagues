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
            if (data?.projectteam1 && data?.projectteam2) {
              return `Match: ${data.projectteam1} vs ${data.projectteam2}`
            }
            return 'New Match'
          },
        ],
      },
    },
    {
      name: 'matchday', // round_id in joomleague
      type: 'relationship',
      relationTo: 'matchdays',
      required: true,
    },
    {
      name: 'match_number',
      type: 'text',
    },
    {
      name: 'projectteam1',
      type: 'relationship',
      relationTo: 'project-teams',
      required: true,
    },
    {
      name: 'projectteam2',
      type: 'relationship',
      relationTo: 'project-teams',
      required: true,
    },
    {
      name: 'venue', // playground_id
      type: 'relationship',
      relationTo: 'venues',
    },
    {
      name: 'match_date',
      type: 'date',
      required: true,
    },
    {
      name: 'team1_result',
      type: 'number',
    },
    {
      name: 'team2_result',
      type: 'number',
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
    }
  ],
}
