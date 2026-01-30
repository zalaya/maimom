import { ContactNote } from '@/components/ContactNote'
import { Section } from '@/components/Section'

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
