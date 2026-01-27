import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SectionHeader } from './section-header'

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
