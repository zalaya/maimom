import Footer from './components/Footer'
import { Topbar } from './components/topbar'
import CollectionSection from './sections/Collection.section'
import ContactNoteSection from './sections/ContactNote.section'

export const App = () => {
  return (
    <div className="min-h-screen bg-white text-foreground font-inter">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col bg-background shadow-sm">
        <Topbar />
        <main className="flex-1">
          <div className="py-10">
            <CollectionSection />
            <ContactNoteSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
