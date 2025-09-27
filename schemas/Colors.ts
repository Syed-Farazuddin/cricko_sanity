import {defineType} from 'sanity'

export default defineType({
  name: 'themes',
  title: 'App Themes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Theme Name',
      type: 'string',
      options: {
        list: [
          {title: 'Dark', value: 'dark'},
          {title: 'Light', value: 'light'},
        ],
      },
    },
    {
      name: 'isActive',
      title: 'Active Theme',
      type: 'boolean',
      description: 'Switch ON to make this theme active in the app',
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'object',
      fields: [
        {
          name: 'type',
          type: 'string',
        },
        {name: 'background', type: 'string'},
        {name: 'dark', type: 'string'},
        {name: 'white', type: 'string'},
        {name: 'titles', type: 'string'},
        {name: 'subTitles', type: 'string'},
        {name: 'whitish', type: 'string'},
        {name: 'blue500', type: 'string'},
        {name: 'blue400', type: 'string'},
        {name: 'blue700', type: 'string'},
        {name: 'aquaLight200', type: 'string'},
        {name: 'lightBlue100', type: 'string'},
        {name: 'lightBlue50', type: 'string'},
        {name: 'blueDark', type: 'string'},
        {name: 'greyCaption', type: 'string'},
        {name: 'red500', type: 'string'},
        {name: 'purple', type: 'string'},
        {name: 'subBackground', type: 'string'},
        {name: 'green', type: 'string'},
        {name: 'textTitle', type: 'string'},
        {name: 'textSubtitle', type: 'string'},
        {name: 'normalText', type: 'string'},
        {name: 'orange50', type: 'string'},
        {name: 'orange300', type: 'string'},
        {name: 'primaryYellow', type: 'string'},
        {name: 'baseLight', type: 'string'},
        {name: 'yellow200', type: 'string'},
      ],
    },
  ],
})
