
import { LandingPage, ServicesPage, HowItWorksPage, FAQPage, ContactPage } from '@/components'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage/>
      <ServicesPage/>
      <HowItWorksPage/>
      <ContactPage/>
      <FAQPage/>
    </main>
  )
}
