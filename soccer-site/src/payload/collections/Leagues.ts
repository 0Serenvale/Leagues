import type { CollectionConfig } from 'payload'

export const Leagues: CollectionConfig = {
  slug: 'leagues',
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
      name: 'short_name',
      type: 'text',
    },
    {
      name: 'country',
      type: 'text',
      defaultValue: 'DZA',
    }
  ],
}
