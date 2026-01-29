import { cn } from '@/lib/utils'
import Note from './Note'
import type { Rotation } from './Photo'
import Photo from './Photo'

interface NoteWithPhotoProps {
  isReversed?: boolean
  photo: {
    src: string
    alt?: string
    rotation?: Rotation
  }
  note: {
    year: number
    title: string
    description?: string
    tags?: string[]
  }
}

export default function NoteWithPhoto({
  isReversed = false,
  photo,
  note
}: NoteWithPhotoProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-5xl px-6 md:px-8 flex flex-col gap-12 md:flex-row md:items-start justify-center',
        isReversed && 'md:flex-row-reverse'
      )}
    >
      <Photo {...photo} />
      <Note {...note} />
    </div>
  )
}
