import React from 'react'
import gsap from 'gsap'

export function Preloader() {
  const [count, setCount] = React.useState(0)
  const [vis, setVis] = React.useState(true)

  const preloaderContainer = React.useRef<HTMLDivElement>(null!)
  const loadingBar = React.useRef<HTMLDivElement>(null!)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + Math.floor(Math.random() * 10) + 1)
      gsap.to(loadingBar, { width: count + '%', duration: 0.1 })

      if (count > 100) setCount(100)
    }, 30)
    if (count >= 100) {
      gsap.timeline().to(preloaderContainer, {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut',
        delay: 0.5,
      })
      setTimeout(() => {}, 500)
      setVis(false)
    }

    return () => clearInterval(interval)
  }, [count])

  if (!vis) return null

  return (
    <div
      ref={preloaderContainer}
      className="fixed w-full h-full bg-dark flex items-center flex-col"
    >
      <div className="text-[10vw] font-extrabold text-orange-500">{count}</div>
      <div className="text-xs font-mono text-zinc-500 mt-4 uppercase tracking-widest">
        Loading...
      </div>
      <div className="w-64 h-px bg-zinc-800 mt-4 relative overflow-hidden">
        <div
          ref={loadingBar}
          className="absolute top-0 left-0 h-full bg-accent w-0"
        />
      </div>
    </div>
  )
}
