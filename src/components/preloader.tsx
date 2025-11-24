import React from 'react'
import gsap from 'gsap'

export function Preloader() {
  const [count, setCount] = React.useState(0)
  const [isComplete, setIsComplete] = React.useState(false)

  const preloaderRef = React.useRef<HTMLDivElement>(null)
  const loadingBarRef = React.useRef<HTMLDivElement>(null)
  const counterRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const startTime = Date.now()
    const duration = 1500

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2

      const newCount = Math.floor(eased * 100)
      setCount(newCount)

      if (loadingBarRef.current) {
        gsap.to(loadingBarRef.current, {
          width: `${newCount}%`,
          duration: 0.1,
          ease: 'none',
        })
      }

      if (progress < 1) {
        requestAnimationFrame(updateProgress)
      } else {
        setTimeout(() => {
          setIsComplete(true)
        }, duration + 1200)
      }
    }

    requestAnimationFrame(updateProgress)
  }, [])

  React.useEffect(() => {
    if (isComplete && preloaderRef.current) {
      const tl = gsap.timeline()

      tl.to(preloaderRef.current, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.2,
      }).to(
        preloaderRef.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        '-=0.3',
      )
    }
  }, [isComplete])

  if (isComplete && count >= 100) {
    return null
  }

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 w-full h-full bg-zinc-900 flex items-center justify-center flex-col z-50"
    >
      <div
        ref={counterRef}
        className="text-[10vw] font-extrabold text-orange-500 leading-none"
      >
        {count}
      </div>

      <div className="text-xs font-mono text-zinc-500 mt-6 uppercase tracking-widest">
        Loading...
      </div>

      <div className="w-64 h-0.5 bg-zinc-800 mt-6 relative overflow-hidden rounded-full">
        <div
          ref={loadingBarRef}
          className="absolute top-0 left-0 h-full bg-orange-500 w-0 rounded-full"
          style={{ boxShadow: '0 0 10px rgba(249, 115, 22, 0.5)' }}
        />
      </div>
    </div>
  )
}
