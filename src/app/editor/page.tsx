"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import ColorPicker from "../components/ColorPicker";
import { Switch } from "components/ui/switch";
import Link from "next/link";
import ENavSvg1 from "../components/ui/svg/ENavSvg1";
import ENavSvg2 from "../components/ui/svg/ENavSvg2";
import ENavSvg3 from "../components/ui/svg/ENavSvg3";
import ENavSvg4 from "../components/ui/svg/ENavSvg4";
import ENavSvg5 from "../components/ui/svg/ENavSvg5";
import ENavSvg6 from "../components/ui/svg/ENavSvg6";

// export default function Editor() {
//   const [fontName, setFontName] = useState('Arial');
//   const [fontSize, setFontSize] = useState(14);
//   const [fontOpacity, setFontOpacity] = useState('Extra Light');

//   const handleFontNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setFontName(event.target.value);
//   };

//   const handleFontOpacityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setFontOpacity(event.target.value);
//   };

//   const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFontSize(Number(event.target.value));
//   };

//   return (
//     <>
//     <section >
//       <nav className=' ml-[24.8rem] bg-[#1F2937] absolute w-[900px] text-white px-4'>
//         <ul className='flex items-stretch justify-center gap-3'>
//           <li className=' px-5 py-3 border-b-4 border-b-purple-600'>
//           <Link href='/editor' >
//             <ENavSvg1/>
//             Text
//             </Link>
//           </li>
//           <li>
//           <Link href='' className=' px-5 py-3 border-b-4 border-b-purple-600 block'>
//           <ENavSvg2/>
//             Background
//             </Link>
//           </li>
//           <li>
//           <Link href='' className=' px-5 py-3 border-b-4 border-b-purple-600 block'>
//           <ENavSvg3/>
//             Media
//           </Link>
//           </li>
//           <li>
//           <Link href='' className=' px-5 py-3 border-b-4 border-b-purple-600 block'>
//             <ENavSvg4/>
//             Audio
//           </Link>
//           </li>
//           <li>
//           <Link href='' className=' px-5 py-3 border-b-4 border-b-purple-600 block'>
//             <ENavSvg5/>
//             Motion
//           </Link>
//           </li>
//           <li>
//           <Link href='' className=' px-5 py-3 border-b-4 border-b-purple-600 block'>
//             <ENavSvg6/>
//             Transition
//           </Link>
//           </li>
//         </ul>
//       </nav>
//     </section>
//     <section className=' ml-[6.2rem] mt-0'>
//       <div className=" h-[100vh] w-[300px] bg-gray-800 text-white py-8 px-8 max-w-sm overflow-visible">
//         <p className="font-bold text-md">Font</p>
//         <select id="font-name" value={fontName} onChange={handleFontNameChange} className='bg-black rounded px-3 py-1  font-thin mt-1 w-full'>
//           <option value="Arial">Arial</option>
//           <option value="Helvetica">Helvetica</option>
//           <option value="Times New Roman">Times New Roman</option>
//         </select>

//         <select id="font-name" value={fontOpacity} onChange={handleFontOpacityChange} className='bg-black rounded px-3 py-1  font-thin mt-1 w-full'>
//           <option value="Arial">Extra Light</option>
//           <option value="Helvetica">Light</option>
//           <option value="Times New Roman">Normal</option>
//           <option value="Times New Roman">Dark</option>
//           <option value="Times New Roman">Extra Dark</option>
//         </select>

//         <input
//           type="number"
//           id="font-size"
//           value={fontSize}
//           onChange={handleFontSizeChange}
//           min={8}
//           max={72}
//           className='bg-black rounded px-3 py-1 outline-none border-none font-thin mt-1 w-full'
//           placeholder='Range: 8 - 72'
//         />

//         <p className="font-bold text-md mt-5">Font Color</p>
//         <ColorPicker/>

//         <p className="font-bold text-md mt-5">Font Background</p>
//         <ColorPicker/>

//         <div className="flex items-center justify-between mt-10">
//         <p className="font-bold text-md">Apply to all slides</p>
//         <Switch/>
//         </div>

//       </div>
//     </section>
//     </>
//   )
// }

// import React, { useState } from 'react';
// import Link from 'next/link';
// import ENavSvg1 from '../components/ui/svg/ENavSvg1';
// import { Button } from "@/components/ui/button"

import TextSection from "./TextSection/TextSection";
import BgSection from "./Bg-Section/BgSection";
import AudioSection from "./AudioSection/AudioSection";
import MediaSection from "./MediaSection/MediaSection";
import TransitionSection from "./TransitionSection/TransitionSection";

const Editor: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const tabsState = typeof(window) !== 'undefined' && window.localStorage.getItem("tabsState");
    if (tabsState) {
      setActiveSection(JSON.parse(tabsState));
    }
  }, []);

  useEffect(() => {
    // Store the checkbox state in local storage whenever it changes
    typeof(window) !== 'undefined' && window.localStorage.setItem("tabsState", JSON.stringify(activeSection));
  }, [activeSection]);
  // Storing checkboxes colors in local storage

  // {/* <div className=" h-[100vh] w-[300px] bg-gray-800 text-white py-8 px-8 max-w-sm overflow-visible">
  //   <p className="font-bold text-md">Font</p>
  //   <select id="font-name" value={fontName} onChange={handleFontNameChange} className='bg-black rounded px-3 py-1  font-thin mt-1 w-full'>
  //     <option value="Arial">Arial</option>
  //     <option value="Helvetica">Helvetica</option>
  //     <option value="Times New Roman">Times New Roman</option>
  //   </select>

  //   <select id="font-name" value={fontOpacity} onChange={handleFontOpacityChange} className='bg-black rounded px-3 py-1  font-thin mt-1 w-full'>
  //     <option value="Arial">Extra Light</option>
  //     <option value="Helvetica">Light</option>
  //     <option value="Times New Roman">Normal</option>
  //     <option value="Times New Roman">Dark</option>
  //     <option value="Times New Roman">Extra Dark</option>
  //   </select>

  //   <input
  //     type="number"
  //     id="font-size"
  //     value={fontSize}
  //     onChange={handleFontSizeChange}
  //     min={8}
  //     max={72}
  //     className='bg-black rounded px-3 py-1 outline-none border-none font-thin mt-1 w-full'
  //     placeholder='Range: 8 - 72'
  //   />

  //   <p className="font-bold text-md mt-5">Font Color</p>
  //   <ColorPicker />

  //   <p className="font-bold text-md mt-5">Font Background</p>
  //   <ColorPicker/>

  //   <div className="flex items-center justify-between mt-10">
  //   <p className="font-bold text-md">Apply to all slides</p>
  //   <Switch/>
  //   </div>

  // </div> */}

  const sections = [
    <section key={0} className=" ml-[6.2rem] mt-0 w-[300px]">
      <TextSection />
    </section>,
    <section key={1} className=" ml-[6.2rem] mt-0 w-[300px]">
      <BgSection />
    </section>,
    <section key={2} className=" ml-[6.2rem] mt-0 w-[300px]">
    <MediaSection/>
  </section>,
    <section key={3} className=" ml-[6.2rem] mt-0 w-[300px]">
    <AudioSection/>
  </section>,
  <section key={4} className=" ml-[6.2rem] mt-0 w-[300px]">
  <MediaSection/>
</section>,
<section key={5} className=" ml-[6.2rem] mt-0 w-[300px]">
    <TransitionSection/>
  </section>

  ];

  const links = [
    { text: "Text", svgComponent: <ENavSvg1 /> },
    { text: "Background", svgComponent: <ENavSvg2 /> },
    { text: "Media", svgComponent: <ENavSvg3 /> },
    { text: "Audio", svgComponent: <ENavSvg4 /> },
    { text: "Motion", svgComponent: <ENavSvg5 /> },
    { text: "Transition", svgComponent: <ENavSvg6 /> },
  ];

  return (
    <>
      <nav className=" bg-[#1F2937] absolute right-0 left-[399px] text-white">
        <ul className="flex items-stretch justify-center gap-3">
          {links.map((link, index) => (
            <li key={link.text}>
              <Link
                href="/editor"
                onClick={() => setActiveSection(index)}
                className={
                  index === activeSection
                    ? " px-5 py-3 border-b-4 border-b-purple-600 block"
                    : " px-5 py-3  block"
                }
              >
                {link.svgComponent}
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-3xl absolute top-[155px] left-[408px] bg-black text-white right-3 bottom-40 p-14 flex items-center justify-center">EDITOR PAGE - Video Section</div>
      {sections[activeSection]}
    </>
  );
};

export default Editor;
