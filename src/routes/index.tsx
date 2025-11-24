import { Hero } from '@/components/hero'
import { Process } from '@/components/process'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <Hero />
      <Process />
    </>
  )
}
