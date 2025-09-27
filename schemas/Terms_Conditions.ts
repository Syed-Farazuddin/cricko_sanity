import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'terms_and_conditions',
  type: 'document',
  title: 'Terms and Conditions',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
  ],
})
