import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'alias',
      type: 'text',
    },
    {
      name: 'league',
      type: 'relationship',
      relationTo: 'leagues',
      required: true,
    },
    {
      name: 'season',
      type: 'relationship',
      relationTo: 'seasons',
      required: true,
    },
    {
      name: 'project_type',
      type: 'select',
      options: [
        { label: 'Simple League', value: 'SIMPLE_LEAGUE' },
        { label: 'Divisions League', value: 'DIVISIONS_LEAGUE' },
        { label: 'Tournament Mode', value: 'TOURNAMENT_MODE' },
        { label: 'Friendly Matches', value: 'FRIENDLY_MATCHES' },
      ],
      defaultValue: 'SIMPLE_LEAGUE',
      required: true,
    }
  ],
}
