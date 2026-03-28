import type { CollectionConfig } from 'payload'

export const Matchdays: CollectionConfig = {
  slug: 'matchdays', // JoomLeague calls this "round"
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
      name: 'project',
      type: 'relationship',
      relationTo: 'projects',
      required: true,
    },
    {
      name: 'roundcode',
      type: 'number',
    },
    {
      name: 'round_date_first',
      type: 'date',
    },
    {
      name: 'round_date_last',
      type: 'date',
    },
    {
      name: 'ordering',
      type: 'number',
      defaultValue: 0,
    }
  ],
}
