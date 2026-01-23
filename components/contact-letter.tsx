import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

export function ContactLetter() {
  return (
    <div className="mx-auto max-w-3xl px-6 md:px-8 ">
      <article className="bg-[#f9f6f1] px-10 py-14 shadow-sm space-y-8">
        <header className="space-y-4 text-center">
          <h2 className="font-serif text-3xl tracking-tight">
            ¿Quieres escribirle a mamá?
          </h2>
          <p className="font-serif text-muted-foreground">
            Este mensaje llegará como una pequeña carta al taller. Escrita con
            calma, leída con cariño.
          </p>
        </header>
        <Separator className="opacity-40" />
        <form className="space-y-6">
          <Input
            placeholder="Tu correo electrónico"
            className="bg-transparent border-0 border-b rounded-none focus-visible:ring-0"
          />
          <Textarea
            placeholder="Tu mensaje…"
            rows={5}
            className="bg-transparent border-0 border-b rounded-none focus-visible:ring-0 resize-none"
          />
          <div className="pt-4 text-center">
            <Button variant="ghost" className="font-handwriting text-base">
              Enviar carta
            </Button>
          </div>
        </form>
        <Separator className="opacity-30" />
        <footer className="text-center font-handwriting text-sm text-muted-foreground">
          Cada carta se guarda como un recuerdo.
        </footer>
      </article>
    </div>
  )
}
