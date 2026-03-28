import type { CollectionConfig } from 'payload'

export const MatchEvents: CollectionConfig = {
  slug: 'match-events',
  admin: {
    useAsTitle: 'event_time',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'match',
      type: 'relationship',
      relationTo: 'matches',
      required: true,
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
      name: 'event_type',
      type: 'select',
      options: [
        { label: 'Goal', value: 'GOAL' },
        { label: 'Yellow Card', value: 'YELLOW_CARD' },
        { label: 'Red Card', value: 'RED_CARD' },
        { label: 'Substitution', value: 'SUBSTITUTION' },
      ],
      required: true,
    },
    {
      name: 'event_time',
      type: 'number',
      required: true,
    },
    {
      name: 'event_sum',
      type: 'number',
      defaultValue: 1,
    }
  ],
}
