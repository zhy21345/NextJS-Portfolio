import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './test.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en" id ="container">
        <header>top</header>
        <main>
            <body className={inter.className}>{children}</body>
        </main>
        <footer>bottom</footer>
    </div>
  )
}
