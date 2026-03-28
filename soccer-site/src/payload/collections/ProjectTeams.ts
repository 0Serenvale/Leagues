import type { CollectionConfig } from 'payload'

export const ProjectTeams: CollectionConfig = {
  slug: 'project-teams',
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
            return `ProjectTeam: ${data?.project} - ${data?.team}`
          }
        ]
      }
    },
    {
      name: 'project',
      type: 'relationship',
      relationTo: 'projects',
      required: true,
    },
    {
      name: 'team',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
    },
    {
      name: 'points_won',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'points_drawn',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'points_lost',
      type: 'number',
      defaultValue: 0,
    }
  ],
}
