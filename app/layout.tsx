
import { montserrat, poppins } from '@/constant/font'
import './globals.css'
import Navbar from '../components/Navbar'

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
        <Navbar />
        {children}
      </body>
    </html>
  )
}
