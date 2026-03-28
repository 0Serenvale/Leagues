import type { CollectionConfig } from 'payload'

export const TeamPlayers: CollectionConfig = {
  slug: 'team-players', // To replace the standalone Players collection and link Persons to ProjectTeams
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
            return `Player: ${data?.person} for ${data?.projectteam}`
          }
        ]
      }
    },
    {
      name: 'projectteam',
      type: 'relationship',
      relationTo: 'project-teams',
      required: true,
    },
    {
      name: 'person',
      type: 'relationship',
      relationTo: 'persons',
      required: true,
    },
    {
      name: 'jersey_number',
      type: 'number',
    },
    {
      name: 'market_value',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'injury',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'suspension',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
