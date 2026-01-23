import { ContactLetter } from '@/components/contact-letter'
import { Section } from '@/components/section'

const ContactLetterSection = () => {
  return (
    <Section
      id="contact-letter"
      header={{
        name: 'Contacto',
        title: 'Escribir una carta',
        subtitle: 'Un espacio para dejar unas palabras, con calma y cariño.'
      }}
    >
      <ContactLetter />
    </Section>
  )
}

export default ContactLetterSection
