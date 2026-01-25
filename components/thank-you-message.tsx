import { cn } from '@/lib/utilities'

function ThankYouMessage() {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 z-10',
        'flex items-center justify-center',
        'animate-in fade-in duration-500'
      )}
    >
      <p className="max-w-sm text-center font-serif text-muted-foreground">
        Gracias por escribir.
        <br />
        La carta ha llegado al taller y será leída con calma.
      </p>
    </div>
  )
}

export default ThankYouMessage
