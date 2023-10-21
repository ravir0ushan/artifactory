
import { ThemeProvider } from '@/context/ThemeContext'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Artifactory',
  description: 'Modern ecommerce next js app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <div className='container'>
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </ThemeProvider>
        </body>
    </html>
  )
}
