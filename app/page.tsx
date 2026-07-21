import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { Ticker } from '@/components/sections/Ticker'
import { Services } from '@/components/sections/Services'
import { WhyV53 } from '@/components/sections/WhyV53'
import { Location } from '@/components/sections/Location'
import { ReservationModes } from '@/components/sections/ReservationModes'
import { Voices } from '@/components/sections/Voices'
import { About } from '@/components/sections/About'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { RevealObserver } from '@/components/ui/Reveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema } from '@/content/schema'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <WhyV53 />
      <Location />
      <ReservationModes />
      <Voices />
      <About />
      <Faq />
      <Contact />
      <Footer />
      <RevealObserver />
      <JsonLd data={faqSchema} />
    </>
  )
}
