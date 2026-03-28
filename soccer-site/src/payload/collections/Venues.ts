import type { CollectionConfig } from 'payload'

export const Venues: CollectionConfig = {
  slug: 'venues', // JoomLeague calls this "playground"
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
      name: 'club',
      type: 'relationship',
      relationTo: 'clubs',
    },
    {
      name: 'capacity',
      type: 'number',
    },
    {
      name: 'address',
      type: 'text',
    }
  ],
}
