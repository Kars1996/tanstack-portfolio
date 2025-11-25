export function Hero() {
  return (
    <header className="h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <p className="text-orange-500 font-mono mb-6">
          Based in San Francisco
        </p>
        <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
          <div className="overflow-hidden">
              CREATIVE
          </div>
          <div className="overflow-hidden">
            <span className="translate-y-full text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-600">
              DEVELOPER
            </span>
          </div>
          <div className="overflow-hidden">
              & ARTIST
          </div>
        </h1>
        <p className="max-w-xl text-zinc-400 text-lg md:text-xl leading-relaxed translate-y-[100px]">
          Bridging the gap between engineering and aesthetics. Crafting digital
          experiences that are efficient, beautiful, and memorable.
        </p>
      </div>
      <div className="absolute bottom-10 right-10 md:right-20 flex gap-4 text-xs font-mono text-zinc-500 animate-bounce">
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </header>
  )
}
