import Link from 'next/link'
import React from 'react'

function AudioSection() {
  return (
    <div className="h-[100vh] w-[300px] bg-gray-800 text-white py-8 px-4 max-w-sm overflow-visible flex flex-col gap-y-8">

      <div className="flex gap-2">
        <Link href='#' className='bg-white px-3 py-2 border-2 border-purple-500 text-sm text-purple-600'>Record Voiceover</Link>
        <Link href='#' className='bg-white px-3 py-2 border-2 border-purple-500 text-sm text-purple-600'><span>+</span>Upload Audio</Link>
      </div>
      
      {/* radio */}
      <div className="flex items-center mt-4">
    <input checked id="disabled-radio-2" type="radio" value="" name="disabled-radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="disabled-radio-2" className="ml-2  font-medium text-lg text-gray-400 dark:text-gray-500 flex items-center">
      Background Audio
    </label>
    </div>

{/* Search Bar */}
<form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block w-full px-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
        <button type="submit" className="text-white absolute right-1.5 bottom-[5.4px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-[3.5px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

{/* audio grid */}

<div className="grid grid-cols-3 gap-2">
  <Link href='#'>
  <div className='text-center bg-gradient-to-br from-blue-900 to-purple-700 py-5'>
    Audio 1
  </div>
  </Link>
  <Link href='#'>
  <div className='text-center bg-gradient-to-br from-blue-900 to-purple-700 py-5'>
    Audio 2
  </div>
  </Link>
  <Link href='#'>
  <div className='text-center bg-gradient-to-br from-blue-900 to-purple-700 py-5'>
    Audio 3
  </div>
  </Link>
  <Link href='#'>
  <div className='text-center bg-gradient-to-br from-blue-900 to-purple-700 py-5'>
    Audio 4
  </div>
  </Link>
  <Link href='#'>
  <div className='text-center bg-gradient-to-br from-blue-900 to-purple-700 py-5'>
    Audio 5
  </div>
  </Link>
  <Link href='#'>
  <div className='text-center bg-gradient-to-br from-blue-900 to-purple-700 py-5'>
    Audio 6
  </div>
  </Link>
</div>

    </div>
  )
}

export default AudioSection