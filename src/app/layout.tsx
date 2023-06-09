import { Advice } from './components/Advice'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oferta de empleo',
  description: ''
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Advice />
        {/* @ts-expect-error Server Component */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
