import type { CollectionConfig } from 'payload'

export const Teams: CollectionConfig = {
  slug: 'teams',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'club',
      type: 'relationship',
      relationTo: 'clubs',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'short_name',
      type: 'text',
    },
    {
      name: 'middle_name',
      type: 'text',
    },
    {
      name: 'alias',
      type: 'text',
    },
    {
      name: 'info',
      type: 'text',
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'picture',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
