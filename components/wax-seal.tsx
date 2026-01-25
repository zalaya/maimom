import { cn } from '@/lib/utilities'

export default function WaxSeal({ onSeal }: { onSeal: () => void }) {
  return (
    <button
      type="button"
      aria-label="Sellar carta"
      onClick={onSeal}
      className={cn(
        'absolute bottom-6 right-6 z-10',
        'h-11 w-11 rounded-full bg-red-700',
        'shadow-[0_6px_8px_rgba(0,0,0,0.3)]',
        'transition-transform duration-200 ease-out',
        'active:scale-95',
        'animate-wax-breathe'
      )}
    >
      <span className="absolute inset-2 rounded-full bg-red-800 opacity-90" />
      <span className="absolute inset-3 rounded-full border border-red-900/40" />
    </button>
  )
}
