import { createFileRoute } from '@tanstack/react-router'
import { Sparkles } from 'lucide-react'
import React from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <div className="mx-auto max-w-4xl border-x border-dashed border-slate-200 h-full min-h-screen flex flex-col">
        <div className="border-b border-dashed border-slate-200 px-6 py-6 md:px-12 md:py-8">
          <div className="mb-2 text-sm text-slate-400 font-medium">
            こんにちは
          </div>
          <h1 className="mb-1 text-xl font-semibold tracking-tight">
            Hello World
          </h1>
        </div>

        <div className="h-4 border-b border-dashed border-slate-200" />

        <div className="border-b border-dashed border-slate-200 px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Hello, World!
            </h2>

            <p className="mb-8 text-pretty text-base leading-relaxed text-slate-500 md:text-lg">
              Setting up a quick tanstack UI, I like this so far!
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <button
                onClick={() => setCount((c) => c + 1)}
                className="text-white inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#B16CEA] to-[#FF5E69] px-8 py-3 text-sm font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-purple-200"
              >
                <Sparkles className="h-4 w-4" />
                Increase Count
              </button>

              <div className="font-mono text-xs text-slate-400 mt-2">
                Current Count:{' '}
                <span className="text-slate-900 font-semibold text-lg ml-1">
                  {count.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-8 border-t border-dashed border-slate-200 grow" />
      </div>
    </div>
  )
}
