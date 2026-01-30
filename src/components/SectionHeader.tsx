import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

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
      <span className="block font-handwriting text-xl text-muted-foreground">
        {name}
      </span>
      <h1 className="font-serif text-3xl tracking-tight">{title}</h1>
      <p className="font-serif text-muted-foreground">{subtitle}</p>
      <Separator className="mt-10" />
    </header>
  )
}
