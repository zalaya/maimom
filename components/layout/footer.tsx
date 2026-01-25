import { Separator } from '@/components/ui/separator'

const Footer = () => {
  return (
    <footer className="mt-10 mb-10">
      <Separator />
      <div className="mt-10 text-center space-y-4 px-6">
        <p className="font-handwriting text-sm text-muted-foreground">
          Hecho con calma, hilo a hilo y mucho amor.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Maimom
        </p>
      </div>
    </footer>
  )
}

export default Footer
