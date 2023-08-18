import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google';

import Navbar from './components/navbar/navbar';
import ClientOnly from './components/clientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/toasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';

export const metadata: Metadata = {
  title: 'Reactive Vacations',
  description: 'Vacation Rental System Clone',
}

const font = Nunito( {
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
        </body>
    </html>
  )
}
