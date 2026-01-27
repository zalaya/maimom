import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export function PaperNote({
  section,
  title,
  content,
  footer
}: {
  section?: string
  title: string
  content: string
  footer?: string
}) {
  return (
    <article
      className={cn(
        'relative max-w-xl',
        'bg-[#f9f6f1] px-8 py-10',
        'shadow-sm'
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_23px,rgba(0,0,0,0.04)_24px)] bg-size-[100%_24px]" />
      <div className="relative space-y-4">
        {section && (
          <span className="font-handwriting text-sm text-muted-foreground">
            {section}
          </span>
        )}
        <h2 className="font-serif text-2xl">{title}</h2>
        <p className="font-serif leading-relaxed text-muted-foreground">
          {content}
        </p>
        {footer && (
          <>
            <Separator className="opacity-80" />
            <p className="font-handwriting text-xl text-muted-foreground">
              {footer}
            </p>
          </>
        )}
      </div>
    </article>
  )
}
