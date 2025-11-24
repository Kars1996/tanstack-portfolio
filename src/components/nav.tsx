import { Link } from '@tanstack/react-router'

export function Nav() {
  const items = [
    {
      name: 'Work',
      href: '/#',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
      <Link
        to="/"
        className="text-2xl uppercase font-display font-bold tracking-tighter hover:opacity-80 transition-opacity"
        data-cursor-text="HOME"
      >
        Alex.art
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppdercase">
        {items.map((item, indx) => (
          <Link
            key={indx}
            className="nav-link relative py-1"
            to={item.href}
            data-cursor-text={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <button className="md:hidden text-white uppercase text-sm font-bold">
        Menu
      </button>
    </nav>
  )
}
