import React from 'react'

export default function ProjectCard(props: {title:string}) {
  return (
      <a href="#" className="shadow-xl ">
          <div className="px-5 py-3 border-2 border-violet-500 rounded-md bg-black text-white hover:scale-110 transition-all group duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="w-20 h-20 mx-auto group-hover:stroke-purple-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium mx-auto max-w-xs px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ml-2 group-hover:bg-purple-300 group-hover:text-purple-900">{props.title}</span>
          </div>
        </a>
  )
}
