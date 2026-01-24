import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

export function ContactLetter() {
  return (
    <div className="mx-auto max-w-3xl px-6 md:px-8">
      <article className="space-y-10 bg-[#f9f6f1] px-12 py-16 shadow-sm">
        <header className="space-y-6">
          <h2 className="font-serif text-3xl tracking-tight">Querida mamá,</h2>
          <p className="font-serif leading-relaxed text-muted-foreground">
            Si quieres, aquí puedes escribir unas palabras. Llegarán como una
            carta al taller, leída con calma, guardada con cariño.
          </p>
        </header>
        <Separator className="opacity-30" />
        <form className="space-y-10">
          <Textarea
            rows={8}
            placeholder="Empieza a escribir aquí…"
            className="resize-none border-0 bg-transparent p-0 font-serif text-base leading-relaxed text-foreground placeholder:text-muted-foreground/50 shadow-none focus-visible:outline-none focus-visible:ring-0"
          />
          <div className="max-w-xs space-y-3">
            <p className="font-serif text-muted-foreground">Con cariño,</p>
            <Input
              placeholder="Tu nombre"
              className="border-0 rounded-none border-b border-border/40 bg-transparent p-0 font-serif text-base shadow-none placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-0"
            />
          </div>
          <div className="pt-4">
            <Button
              variant="ghost"
              className="px-0 font-serif text-base text-muted-foreground hover:text-foreground"
            >
              Enviar carta
            </Button>
          </div>
        </form>
      </article>
    </div>
  )
}
