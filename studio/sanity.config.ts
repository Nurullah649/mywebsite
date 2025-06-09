// mywebsite/studio/sanity.config.ts

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import project from './schema/project' // Oluşturduğumuz şemayı import edin

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'Nurullah_Kurnaz_Content_Studio',
  title: 'Nurullah Kurnaz Website',
  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [project], // Şemayı buraya ekleyin
  },
})