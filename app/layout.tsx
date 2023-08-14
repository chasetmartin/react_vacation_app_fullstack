import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google';

import Navbar from './components/navbar/navbar';

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
        <Navbar />
        {children}
        </body>
    </html>
  )
}
