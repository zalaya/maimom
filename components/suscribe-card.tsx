import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export function SubscribeCard() {
  return (
    <article className="mx-auto max-w-4xl bg-[#f9f6f1] px-12 py-20 shadow-sm space-y-12 text-center">
      <header className="space-y-6">
        <span className="block font-serif text-sm italic text-muted-foreground">
          Sigamos en contacto
        </span>

        <h2 className="font-serif text-4xl tracking-tight">
          ¿Quieres saber del taller?
        </h2>

        <p className="mx-auto max-w-lg font-serif leading-relaxed text-muted-foreground">
          Envío pequeñas notas a lo largo del año.  
          Sin ruido, solo noticias tranquilas sobre nuevas piezas
          y momentos del proceso.
        </p>
      </header>
      <Separator className="mx-auto max-w-sm opacity-30" />
      <form className="mx-auto max-w-md">
        <div className="flex items-end gap-4">
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-1 border-0 border-b border-border/40 rounded-none bg-transparent p-0 font-serif shadow-none placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-0"
          />

          <Button
            variant="ghost"
            className="px-0 font-serif text-muted-foreground hover:text-foreground"
          >
            Suscribirme
          </Button>
        </div>
      </form>
    </article>
  )
}
