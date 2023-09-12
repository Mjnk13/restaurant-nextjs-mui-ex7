import './globals.css'
import type { Metadata } from 'next'

import { ThemeProvider} from '@mui/material'

import theme from '@/mui_theme/theme'
import NavBar from './_component/navbar/NavBar'
import Footer from './_component/footer/Footer'

export const metadata: Metadata = {
  title: 'Restaurant',
  description: 'Nextjs 13 + MUI + Tailwind',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* font awesome 6.4.2 */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
      <body>
      <ThemeProvider theme={theme}>
        <NavBar />
        {children}
        <footer>
          <Footer/>
        </footer>
      </ThemeProvider>
      </body>
    </html>
  )
}