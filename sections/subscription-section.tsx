import { Section } from '@/components/section'
import { SubscriptionCard } from '@/components/subscription-card'

const SubscriptionSection = () => {
  return (
    <Section
      id="subscription"
      header={{
        name: 'Suscripción',
        title: 'Recibir noticias del taller',
        subtitle: 'Pequeñas notas enviadas solo de vez en cuando.'
      }}
    >
      <SubscriptionCard />
    </Section>
  )
}

export default SubscriptionSection
