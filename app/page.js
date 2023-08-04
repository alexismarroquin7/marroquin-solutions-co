
import { LandingPage, ServicesPage, HowItWorksPage, FAQPage } from '@/components'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage/>
      <ServicesPage/>
      <HowItWorksPage/>
      <FAQPage/>
    </main>
  )
}
