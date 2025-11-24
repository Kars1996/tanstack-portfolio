import React from 'react'

export function Preloader() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + Math.floor(Math.random() * 10) + 1)
      if (count > 100) setCount(100)
    }, 30)
    return () => clearInterval(interval)
  }, [count])

  return (
    <div className="fixed w-full h-full bg-dark flex items-center flex-col">
      <div className="text-[10vw] font-extrabold text-orange-500">{count}</div>
      <div className="text-xs font-mono text-zinc-500 mt-4 uppercase tracking-widest">
        Loading...
      </div>
      <div className="w-64 h-px bg-zinc-800 mt-4 relative overflow-hidden">
        <div className="loading-bar absolute top-0 left-0 h-full bg-accent w-0" />
      </div>
    </div>
  )
}
