export const Topbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <span className="font-serif tracking-tight">Maimom</span>

        <nav className="flex items-center gap-6 font-medium text-sm">
          <a
            href="#collection"
            className="hover:text-primary transition-colors"
          >
            Colección
          </a>
          <a
            href="#contact-letter"
            className="font-handwriting hover:text-primary transition-colors"
          >
            Escribir
          </a>
        </nav>
      </div>
    </header>
  )
}
