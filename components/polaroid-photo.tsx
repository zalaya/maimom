import Image, { type StaticImageData } from 'next/image'
import { cn } from '@/lib/utilities'
import PolaroidPin from './polaroid-pin'

type Rotation =
  | '-rotate-3'
  | '-rotate-2'
  | '-rotate-1'
  | 'rotate-0'
  | 'rotate-1'
  | 'rotate-2'
  | 'rotate-3'

interface PolaroidPhotoProps {
  src: string | StaticImageData
  caption?: string
  rotation?: Rotation
  hoverRotation?: Rotation
  priority?: boolean
  className?: string
}

const HOVER_ROTATION_CLASS: Record<Rotation, string> = {
  '-rotate-3': 'hover:-rotate-3',
  '-rotate-2': 'hover:-rotate-2',
  '-rotate-1': 'hover:-rotate-1',
  'rotate-0': 'hover:rotate-0',
  'rotate-1': 'hover:rotate-1',
  'rotate-2': 'hover:rotate-2',
  'rotate-3': 'hover:rotate-3'
}

export function PolaroidPhoto({
  src,
  caption,
  rotation = '-rotate-2',
  hoverRotation = 'rotate-1',
  priority = false,
  className
}: PolaroidPhotoProps) {
  return (
    <figure
      className={cn(
        'group relative bg-white p-4 shadow-lg w-65 sm:w-75 transition-transform duration-300 ease-out',
        rotation,
        HOVER_ROTATION_CLASS[hoverRotation],
        className
      )}
    >
      <PolaroidPin />

      <Image
        src={src}
        alt={caption ?? 'Fotografía decorativa'}
        width={400}
        height={400}
        priority={priority}
        className="w-full object-cover"
      />

      {caption && (
        <figcaption className="text-center font-handwriting text-xl text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
