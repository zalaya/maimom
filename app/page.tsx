import CollectionSection from '@/sections/collection.section'
import ContactLetterSection from '@/sections/contact-letter.section'
import SubscriptionSection from '@/sections/subscription-section'

const Home = () => {
  return (
    <div className="py-10">
      <CollectionSection />
      <ContactLetterSection />
      <SubscriptionSection />
    </div>
  )
}

export default Home
