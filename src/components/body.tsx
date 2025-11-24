import Lenis from 'lenis'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { gsap } from 'gsap'

export function AnimationProvider({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLBodyElement>) {
  gsap.registerPlugin(ScrollTrigger, Flip, ScrollToPlugin)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return <body {...props}>{children}</body>
}
