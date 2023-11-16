import { Inter } from 'next/font/google'
import './globals.css'
import './bootstrap.min.css'
import Navbar from './components/navbar'
import Script from 'next/script'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <footer className="bg-dark p-2 text-center">
          <div className="container">
              <p className="text-white">All Right Reserved By Vidyavista</p>
          </div>
      </footer>
        </body>
        <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
        
    </html>
  )
}
