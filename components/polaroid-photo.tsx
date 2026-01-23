import Image from 'next/image'
import { cn } from '@/lib/utilities'

export function PolaroidPhoto({
  src,
  caption,
  rotate = -2
}: {
  src: string
  caption?: string
  rotate?: number
}) {
  return (
    <figure
      className={cn(
        'group relative bg-white p-4 shadow-lg',
        'w-[260px] sm:w-[300px]',
        'transition-transform duration-300 ease-out',
        'hover:rotate-1'
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span
        className={cn(
          'absolute -top-0.5 left-1/2 -translate-x-1/2',
          'h-2 w-2 rounded-full bg-red-700',
          'shadow-[0_2px_4px_rgba(0,0,0,0.35)]'
        )}
      >
        <span className="absolute left-0.5 top-0.5 h-1 w-1 rounded-full bg-white/40" />
      </span>

      <Image
        src={src}
        alt={caption ?? ''}
        width={400}
        height={400}
        className="w-full object-cover"
      />

      {caption && (
        <figcaption className="mt-3 text-center font-handwriting text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
