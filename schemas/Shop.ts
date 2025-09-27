export default {
  name: 'shop',
  title: 'Shop Screen',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'widget',
          title: 'Widget',
          fields: [
            {
              name: 'widget_name',
              title: 'Widget Name',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
