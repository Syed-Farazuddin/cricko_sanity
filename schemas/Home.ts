import {defineType} from 'sanity'

export default defineType({
  name: 'home_banners',
  title: 'Home Banners',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Upload Banner Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
  ],
})
