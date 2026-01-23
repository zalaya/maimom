import type { ReactNode } from 'react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utilities'

interface SectionHeaderProps {
  name: string
  title: string
  subtitle: string
}

export const SectionHeader = ({
  name,
  title,
  subtitle
}: SectionHeaderProps) => {
  return (
    <header className={cn('max-w-5xl mx-auto md:px-8', 'space-y-2')}>
      <span className="block font-handwriting text-sm text-muted-foreground">
        {name}
      </span>
      <h1 className="font-serif text-3xl tracking-tight">{title}</h1>
      <p className="font-serif text-muted-foreground max-w-md">{subtitle}</p>
      <Separator className="mt-10" />
    </header>
  )
}

interface SectionProps {
  header: {
    name: string
    title: string
    subtitle: string
  }
  id: string
  children: ReactNode
  isFirst?: boolean
  className?: string
}

export const Section = ({
  id,
  header,
  children,
  isFirst = false,
  className
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('scroll-mt-28', !isFirst && 'mt-10', className)}
    >
      <SectionHeader
        name={header.name}
        title={header.title}
        subtitle={header.subtitle}
      />

      <div className="mt-12 space-y-12">{children}</div>
    </section>
  )
}
