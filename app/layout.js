import Head from 'next/head'
import './globals.css'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
})
export const metadata = {
  title: 'Astralis',
  description: 'Your One Stop Destination for Design, Development, and Digital Marketing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {children}
      </body>
    </html>
  )
}
