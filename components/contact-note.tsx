'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utilities'
import ThankYouMessage from './thank-you-message'
import WaxSeal from './wax-seal'

export function ContactNote() {
  const [sent, setSent] = useState(false)

  return (
    <div className="mx-auto max-w-3xl px-6 md:px-8">
      <div className="relative mx-auto max-w-xl">
        <article
          className={cn(
            'relative bg-[#f9f6f1] px-8 py-10 shadow-sm',
            'transition-all duration-500 ease-out',
            sent && 'scale-95 opacity-0 translate-y-6 pointer-events-none'
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_23px,rgba(0,0,0,0.04)_24px)] bg-size-[100%_24px]" />
          <form className="relative space-y-4">
            <h2 className="font-serif text-2xl">Querida mamá,</h2>
            <Textarea
              placeholder="Empieza a escribir aquí…"
              className={cn(
                'resize-none border-0 bg-transparent p-0 shadow-none',
                'font-handwriting text-xl! sm:text-2xl leading-relaxed',
                'text-muted-foreground',
                'placeholder:text-muted-foreground/40',
                'focus-visible:outline-none focus-visible:ring-0'
              )}
            />
            <div className="pt-2 space-y-2">
              <p className="font-handwriting text-xl text-muted-foreground">
                Con cariño,
              </p>
              <Input
                placeholder="Tu nombre"
                className={cn(
                  'h-auto border-0 bg-transparent p-0 shadow-none',
                  'font-handwriting text-xl!',
                  'text-muted-foreground',
                  'placeholder:text-muted-foreground/40',
                  'focus-visible:outline-none focus-visible:ring-0'
                )}
              />
            </div>
          </form>
          {!sent && <WaxSeal onSeal={() => setSent(true)} />}
        </article>
        {sent && <ThankYouMessage />}
      </div>
    </div>
  )
}
