export default {
  name: 'jersey_banners',
  title: 'Jersey Banners',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Upload Jersey Banner Images',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
