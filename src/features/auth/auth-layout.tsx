interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className='bg-primary-foreground container grid h-svh max-w-none items-center justify-center'>
      <div className='sm:w-[480px] sm:p-8'>
        {children}
      </div>
    </div>
  )
}
