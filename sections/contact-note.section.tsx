import { ContactNote } from '@/components/contact-note'
import { Section } from '@/components/layout/section'

const ContactNoteSection = () => {
  return (
    <Section
      id="contact-note"
      header={{
        name: 'Contacto',
        title: 'Escribir una nota',
        subtitle: 'Un espacio para dejar unas palabras, con calma y cariño.'
      }}
    >
      <ContactNote />
    </Section>
  )
}

export default ContactNoteSection
