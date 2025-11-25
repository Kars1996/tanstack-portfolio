import { Hero } from '@/components/hero'
import { Process } from '@/components/process'
import { Projects } from '@/components/projects'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <Hero />
      <Process />
      <Projects />
    </>
  )
}
