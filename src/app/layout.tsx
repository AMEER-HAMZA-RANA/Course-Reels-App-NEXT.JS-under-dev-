import './globals.css'
import Header from './components/Header'
import SideNav from './components/SideNav'

export const metadata = {
  title: 'Course Reels',
  description: "Let's start making the course.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative mx-auto overflow-hidden bg-slate-400'>
        <Header/>
        <SideNav/>
        {children}
      </body>
    </html>
  )
}
