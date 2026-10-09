export default function MobileMenu({ open, links }) {
  return (
    <div className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? 'max-h-96 border-t border-gray-100' : 'max-h-0'}`}>
      <ul className="flex flex-col gap-1 px-6 py-4 bg-white">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className={`block rounded-lg px-3 py-3 ${l.active ? 'text-brand' : 'text-mute'}`}>{l.label}</a>
          </li>
        ))}
        <li className="flex items-center gap-4 px-3 pt-3">
          <a href="#" className="font-medium text-ink">Sign In</a>
          <a href="#" className="rounded-full bg-brand px-6 py-2.5 font-medium text-white">Sign Up</a>
        </li>
      </ul>
    </div>
  )
}
