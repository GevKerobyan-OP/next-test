import './globals.css'
import './components/ServerSide/Header/header.module.css';

import Provider from './provider'
import Header from '@/app/components/ServerSide/Header'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  weight: ['300', '600', '800'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Countries',
  description: 'Generated by Gev )',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='dark' style={{
      colorScheme: 'dark'
    }}>
      <body className={nunito.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html >
  )
}