const variants = {
  primary: 'bg-brand text-white hover:bg-[#3f5af0] hover:shadow-lg hover:shadow-brand/30',
  soft: 'bg-brand text-white lg:bg-white/20 lg:backdrop-blur hover:bg-[#3f5af0] lg:hover:bg-white/30',
}

export default function Button({ children, variant = 'primary', className = '', as: Tag = 'button', ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center rounded-full font-medium transition duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
