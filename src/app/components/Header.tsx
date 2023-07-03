'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = () => {
    if (pathname === '/') {
      router.push('/script');
    }
  };


  return (
      // {/* <!-- Header --> */}
    <header>
      {/* <!-- Container --> */}
      <div className=" !w-[100vw]  flex justify-between items-center bg-black text-white py- px-6 z-50 relative">
        {/* <!-- Logo --> */}
          <Link href="./">
        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-16">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
            {/* <!-- Logo Text --> */}
            <p className="text-3xl font-bold">CourseReels</p>
          </div>
        </Link>
        {/* <!-- Top Right SAVE Button --> */}
        <button className={pathname == '/' ? "bg-white text-black px-14 py-2 border-2 border-violet-500 font-bold bg-gradient-to-br hover:from-blue-900 hover:to-purple-900 hover:text-white  transition-all duration-200" : "hidden"} onClick={handleClick} >Create</button>
      </div>
    </header>
  )
}
