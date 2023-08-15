import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google';

import Navbar from './components/navbar/navbar';
import ClientOnly from './components/clientOnly';
import RegisterModal from './components/modals/RegisterModal';

export const metadata: Metadata = {
  title: 'Reactive Vacations',
  description: 'Vacation Rental System Clone',
}

const font = Nunito( {
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
