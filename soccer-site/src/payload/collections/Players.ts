import type { CollectionConfig } from 'payload'

export const Players: CollectionConfig = {
  slug: 'players',
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
      name: 'number',
      type: 'number',
      required: true,
    },
    {
      name: 'position',
      type: 'select',
      options: [
        { label: 'Goalkeeper', value: 'goalkeeper' },
        { label: 'Defender', value: 'defender' },
        { label: 'Midfielder', value: 'midfielder' },
        { label: 'Forward', value: 'forward' },
      ],
      required: true,
    },
    {
      name: 'team',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
