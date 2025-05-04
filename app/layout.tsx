
import { montserrat, poppins } from '@/constant/font'
import './globals.css'
import Navbar from '../components/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Home - Harshit's Portfolio",
  description: 'Full Stack Developer | React | Next.js | TypeScript ',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} lg:overflow-x-hidden`}>
      <body	className='bg-black' >
      <GoogleAnalytics gaId="G-WEJXY46R8L" />

        <Navbar />
        {children}
      </body>
    </html>
  )
}
