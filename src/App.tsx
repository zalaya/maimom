import CollectionSection from './components/collection-section'
import ContactNoteSection from './components/contact-note-section'
import Footer from './components/footer'
import { Topbar } from './components/topbar'

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
