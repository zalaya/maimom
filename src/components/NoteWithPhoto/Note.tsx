import Tag from '@/components/NoteWithPhoto/Tag'

interface NoteProps {
  year: number
  title: string
  description?: string
  tags?: string[]
}

export default function Note({
  year,
  title,
  description,
  tags = []
}: NoteProps) {
  return (
    <div className="relative max-w-xl bg-[#f9f6f1] px-8 py-10 shadow-sm">
      <BackgroundLines />
      <div className="relative space-y-4">
        <div className="font-handwriting text-sm text-muted-foreground">
          {year}
        </div>
        <div className="font-serif text-2xl">{title}</div>
        {description && (
          <div className="font-serif leading-relaxed text-muted-foreground">
            {description}
          </div>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function BackgroundLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_23px,rgba(0,0,0,0.04)_24px)] bg-size-[100%_24px]"
    />
  )
}
