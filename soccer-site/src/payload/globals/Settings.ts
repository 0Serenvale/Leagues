import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'Soccer League',
    },
    {
      name: 'featuredVideoUrl',
      type: 'text',
      label: 'Featured YouTube Video URL',
      admin: {
        description: 'Enter a YouTube video URL (e.g., https://www.youtube.com/watch?v=...)',
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
