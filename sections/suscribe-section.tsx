import { Section } from '@/components/section'
import { SubscribeCard } from '@/components/suscribe-card'

const SubscribeSection = () => {
  return (
    <Section
      id="subscribe"
      header={{
        name: 'Suscripción',
        title: 'Recibir noticias del taller',
        subtitle:
          'Pequeñas notas enviadas solo de vez en cuando.',
      }}
    >
      <SubscribeCard />
    </Section>
  )
}

export default SubscribeSection
