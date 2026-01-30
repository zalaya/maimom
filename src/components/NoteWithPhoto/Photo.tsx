import Pin from '@/components/NoteWithPhoto/Pin'
import { cn } from '@/lib/utils'

export type Rotation =
  | '-rotate-3'
  | '-rotate-2'
  | '-rotate-1'
  | 'rotate-0'
  | 'rotate-1'
  | 'rotate-2'
  | 'rotate-3'

interface PhotoProps {
  src: string
  alt?: string
  rotation?: Rotation
}

export default function Photo({
  src,
  alt = 'Photo',
  rotation = '-rotate-2'
}: PhotoProps) {
  return (
    <div
      className={cn(
        'group relative bg-white p-4 shadow-lg w-64 sm:w-72 transition-transform duration-300 ease-out hover:rotate-0',
        rotation
      )}
    >
      <Pin />
      <img src={src} alt={alt} className="w-full object-cover" />
    </div>
  )
}
