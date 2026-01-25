import { cn } from '@/lib/utilities'

interface NoteWithPhotoProps {
  children: React.ReactNode
  reversed?: boolean
}

export function NoteWithPhoto({
  children,
  reversed = false
}: NoteWithPhotoProps) {
  return (
    <section
      className={cn(
        'mx-auto max-w-5xl flex flex-col gap-12 px-6 md:px-8 md:flex-row md:items-start justify-center',
        reversed && 'md:flex-row-reverse'
      )}
    >
      {children}
    </section>
  )
}
