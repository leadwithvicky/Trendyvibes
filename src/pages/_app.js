import '../app/globals.css'
import GSAPAnimations from '../app/components/GSAPAnimations'
import PageTransition from '../app/components/PageTransition'

export default function App({ Component, pageProps }) {
  return (
    <GSAPAnimations>
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </GSAPAnimations>
  )
} 