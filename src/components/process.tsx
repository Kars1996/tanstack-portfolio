export function Process() {
  const steps = [
    {
      title: 'Discovery',
      description:
        'Understanding the core essence of the brand and the problem at hand.',
    },
    {
      title: 'Design',
      description:
        'Iterative prototyping focused on user experience and visual impact.',
    },
    {
      title: 'Development',
      description:
        'Clean, semantic code that brings the vision to life with performance in mind.',
    },
    {
      title: 'Delivery',
      description:
        'Testing, optimization, and seamless deployment to the world.',
    },
  ]

  return (
    <section className="py-24 md:py-40 px-6 md:px-20 bg-zinc-950/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              My Process
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              A systematic approach to chaos. I break down complex problems into
              manageable, elegant solutions.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((step, indx) => {
              return (
                <div
                  className="group p-8 border border-zinc-50/10 hover:border-zinc-200/50 bg-dark transition-all duration-300 hover:-translate-y-2"
                  key={indx}
                >
                  <span className="text-5xl font-display font-bold text-white/10 group-hover:text-zinc-200 transition-colors mb-4 block">
                    0{indx}
                    {/* there should never really be more than 10 steps so this is fine */}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-400">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
