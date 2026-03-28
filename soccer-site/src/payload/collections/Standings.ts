import type { CollectionConfig } from 'payload'

export const Standings: CollectionConfig = {
  slug: 'standings',
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
      admin: { hidden: true },
      hooks: {
        beforeChange: [
          ({ data }) => {
            return `Standing: ${data?.projectteam}`
          }
        ]
      }
    },
    {
      name: 'projectteam',
      type: 'relationship',
      relationTo: 'project-teams',
      required: true,
      unique: true,
    },
    {
      name: 'played',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
    {
      name: 'won',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
    {
      name: 'drawn',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
    {
      name: 'lost',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
    {
      name: 'goalsFor',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
    {
      name: 'goalsAgainst',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
    {
      name: 'points',
      type: 'number',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.won !== undefined && data?.drawn !== undefined) {
              data.points = (data.won * 3) + data.drawn
            }
          },
        ],
      },
    },
  ],
}
