// mywebsite/studio/schema/project.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Resmin önemli kısımlarını işaretlemeyi sağlar
      },
    }),
    defineField({
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}],
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
    }),
    defineField({
      name: 'liveLink',
      title: 'Live Demo Link',
      type: 'url',
    }),
    defineField({
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
            list: ['Geliştiriliyor', 'Tamamlandı', 'Staj Projesi'],
            layout: 'radio'
        }
    }),
    defineField({
        name: 'awards',
        title: 'Awards',
        type: 'array',
        of: [{type: 'string'}],
    }),
  ],
})