import { Inter } from 'next/font/google'
import Head from 'next/head';
import './globals.css'
import '../fontawesome';
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Snappy Weather',
  description: 'Snappy Forecast delivers instant and concise weather updates with a touch of wit, making staying ahead of the elements a breeze',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
        {/* Add additional icon sizes if needed */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
      </Head>
      <body className={inter.className}>
        <div className='absolute mt-5 ml-5 flex'>
          <Image src={'/icon.png'} width={25} height={25} alt="Web Icon"  className='mx-5'/>
          <span className='text-green-200'>S</span>nappy<span className='text-green-200 ml-1'>W</span>eather
        </div>
        {children}
      </body>
    </html>
  )
}
