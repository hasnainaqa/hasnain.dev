import type React from 'react'
import { Providers } from './providers'
import './globals.css'
export const metadata = {
  title: 'Hasnain Afzal Portfolio',
  description: 'Professional portfolio website',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
