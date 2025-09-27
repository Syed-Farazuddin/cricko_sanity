import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'shop',
  title: 'Shop Screen',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'widget',
          title: 'Widget',
          fields: [
            defineField({
              name: 'widget_name',
              title: 'Widget Name',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
