export default {
  name: 'common',
  type: 'document',
  title: 'Common Application Assets',
  fields: [
    {
      name: 'title',
      title: 'App Title',
      type: 'string',
    },
    {
      name: 'landingImage',
      title: 'Landing Image',
      description: 'Login screen background image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'Logo',
      title: 'App Logo',
      description: 'Logo displayed on login screen',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'dummyProfile',
      title: 'Dummy Profile Picture',
      description: 'Used when user has no profile picture',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'striker',
      title: 'Striker Picture',
      description: 'Shown when selecting striker',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'nonStriker',
      title: 'Non-Striker Picture',
      description: 'Shown when selecting non-striker',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'bowler',
      title: 'Bolwer Picture',
      description: 'Shown when selecting bowler',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
