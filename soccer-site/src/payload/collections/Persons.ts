import type { CollectionConfig } from 'payload'

export const Persons: CollectionConfig = {
  slug: 'persons',
  admin: {
    useAsTitle: 'lastname',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'firstname',
      type: 'text',
      required: true,
    },
    {
      name: 'lastname',
      type: 'text',
      required: true,
    },
    {
      name: 'nickname',
      type: 'text',
    },
    {
      name: 'birthday',
      type: 'date',
    },
    {
      name: 'picture',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'country',
      type: 'text',
      defaultValue: 'DZA',
    }
  ],
}
