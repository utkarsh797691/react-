import { useState } from 'react'
import { ChevronDown, Menu, Sun, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import MobileMenu from './MobileMenu.jsx'

const links = [
  { label: 'Home', href: '#', active: true },
  { label: 'Features', href: '#features' },
  { label: 'Pages', href: '#', dropdown: true },
  { label: 'Support', href: '#' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-30">
      <nav className="mx-auto flex h-[90px] max-w-[1326px] items-center justify-between px-6 lg:px-10 xl:px-0 xl:w-[1326px]" aria-label="Main">
        <Logo />
        <ul className="absolute left-1/2 hidden -translate-x-[75%] items-center gap-10 text-base lg:flex xl:-translate-x-[62%]">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={`flex items-center gap-1.5 transition-colors hover:text-brand ${l.active ? 'text-brand' : 'text-mute'}`}>
                {l.label}
                {l.dropdown && <ChevronDown className="h-4 w-4 text-brand" />}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-6 lg:flex">
          <button aria-label="Toggle theme" className="text-black transition hover:rotate-45"><Sun className="h-6 w-6" strokeWidth={1.5} /></button>
          <a href="#" className="font-medium text-black">Sign In</a>
          <Button as="a" href="#" variant="soft" className="h-[50px] px-[30px] !text-black">Sign Up</Button>
        </div>
        <button className="lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>
      <MobileMenu open={open} links={links} />
    </header>
  )
}
