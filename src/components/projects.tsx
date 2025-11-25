export function Projects() {
  const works = [
    {
      title: 'Lumina Interface',
      description:
        'A dashboard for the future. Built with tanstack and tears.',
      image:
        'https://i.pinimg.com/736x/88/ec/2d/88ec2dbd9617dbbef9ab59f74f93c81d.jpg',
      tags: ['UI/UX Design', 'Development'],
    },
    {
      title: 'Monet Art',
      description:
        'Generative art series exploring nature in a cyberpunk setting.',
      image:
        'https://i.pinimg.com/1200x/a5/bc/06/a5bc068f9e5010308334d36411147583.jpg',
      tags: ['WebGL', 'Creative Coding'],
    },
    {
      title: 'Botanical AI',
      description:
        'Botanical AI is a generative art series exploring nature in a cyberpunk setting.',
      image:
        'https://i.pinimg.com/736x/de/67/11/de6711311514350b6cf9727cd777cb19.jpg',
      tags: ['Frontend', 'React'],
    },
  ]

  return (
    <section className="py-24 md:py-40 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 md:mb-0">
            Selected Projects
          </h2>
          <p className="text-zinc-400 mt-4 md:mt-0">
            (2023 — {new Date().getFullYear()})
          </p>
        </div>
        {works.map((work, indx) => {
          return (
            <div
              key={indx}
              className="group relative mb-32"
              data-cursor-text="VIEW CASE"
            >
              <div className="w-full h-[60vh] md:h-[80vh] bg-zinc-900 overflow-hidden relative rounded-sm">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={work.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt={`Project ${indx + 1}`}
                />
              </div>
              <div className="flex justify-between items-start mt-6">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-orange-500 transition-colors">
                    {work.title}
                  </h3>
                  <div className="flex gap-2 text-xs font-mono uppercase text-zinc-400">
                    {work.tags.map((tag, idx) => {
                      return (
                        <span
                          className="border border-white/10 px-2 py-1 rounded-full"
                          key={`tag-${idx}`}
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <div className="hidden md:block text-zinc-500 font-mono text-sm">
                  0{indx + 1}/0{works.length}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
