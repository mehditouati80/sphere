import { Inter, Karla, Ubuntu } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Cruise-360°',
    default: 'Sail to Success with Cruise-360°',
  },
  description:
    'Empowering cruise agencies to streamline operations, enhance productivity, and drive growth with integrated tools for customer engagement and data analytics.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  weight: ["300", "400", "500", "700"],
  variable: '--font-ubuntu',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        ubuntu.variable,
      )}
    >
      <body className="">{children}</body>
    </html>
  )
}
