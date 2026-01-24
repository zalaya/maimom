import Footer from '@/components/footer'
import CollectionSection from '@/sections/collection.section'
import ContactLetterSection from '@/sections/contact-letter.section'
import SubscribeSection from '@/sections/suscribe-section'

const Home = () => {
  return (
    <div className="py-10">
      <CollectionSection />
      <ContactLetterSection />
      <SubscribeSection />
    </div>
  )
}

export default Home
