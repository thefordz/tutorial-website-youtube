import { Inter, Montserrat, Poppins } from 'next/font/google'
import './globals.css'

const popp = Poppins({ subsets: ['latin'], weight: ["300"] })

export const metadata = {
  title: 'Next.js Modal',
  description: 'How to make Modal Using Next.js TailwindCSS Framer-Motion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popp.className}>{children}</body>
    </html>
  )
}
