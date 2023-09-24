import { ModalProvider } from '@/context/ModalContext'
import './globals.css'

export const metadata = {
  title: 'Get linked',
  description: 'Igniting a Revolution in HR Innovation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ModalProvider>
        <body>{children}</body>
      </ModalProvider>
    </html>
  )
}
