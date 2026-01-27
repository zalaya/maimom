import { cn } from '@/lib/utils'

const PolaroidPin = () => {
  return (
    <span
      aria-hidden
      className={cn(
        'absolute -top-0.5 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-red-700 shadow-[0_2px_4px_rgba(0,0,0,0.35)]'
      )}
    >
      <span className="absolute left-0.5 top-0.5 h-1 w-1 rounded-full bg-white/40" />
    </span>
  )
}

export default PolaroidPin
