import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/components/LanguageContext'

export const metadata = {
  title: 'AASTMT Alumni Center',
  description: 'Our Services. All Your Alumni Services In One Place.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <LanguageProvider>
          <Navbar />
          <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
