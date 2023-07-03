  // import React, { useState, useEffect, useRef } from 'react';
  // import { SketchPicker, ColorResult } from 'react-color';

  // export default function ColorPicker() {
  //   const [selectedColor, setSelectedColor] = useState('linear-gradient(to right, #6f69ac,#283589, #34ace0 )');
  //   const [showPicker, setShowPicker] = useState(false);
  //   const pickerRef = useRef<HTMLDivElement>(null);

  //   const handleColorChange = (color: ColorResult) => {
  //     setSelectedColor(color.hex);
  //   };

  //   const handlePickerToggle = () => {
  //     setShowPicker(!showPicker);
  //   };

  //   const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
  //     if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
  //       setShowPicker(false);
  //     }
  //   };

  //   useEffect(() => {
  //     document.addEventListener('click', handleOutsideClick);
  //     document.addEventListener('touchstart', handleOutsideClick);

  //     return () => {
  //       document.removeEventListener('click', handleOutsideClick);
  //       document.removeEventListener('touchstart', handleOutsideClick);
  //     };
  //   }, []);

  //   return (
  //     <div ref={pickerRef} className='grid mx-auto content-center items-center justify-center gap-0 justify-items-center'>
  //       <div
  //         className='mt-2'
  //         style={{
  //           width: '235px',
  //           height: '30px',
  //           background: selectedColor,
  //           cursor: 'pointer',
  //           borderRadius: '3px'
  //         }}
  //         onClick={handlePickerToggle}
  //       ></div>
  //       {showPicker && (
  //         <div style={{ position: 'absolute', zIndex: 1 }}>
  //           <SketchPicker color={selectedColor} onChange={handleColorChange} />
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  storageKey: string; // Unique identifier for local storage key
}

const ColorPicker: React.FC<ColorPickerProps> = ({ storageKey }) => {
  const [selectedColor, setSelectedColor] = useState<string>(() => {
    // Retrieve the color from local storage on component mount
    const storedColor =  typeof(window) !== 'undefined' && window.localStorage.getItem(storageKey);
    return storedColor || 'linear-gradient(to right, #6f69ac, #283589, #34ace0)';
  });
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleColorChange = (color: ColorResult) => {
    setSelectedColor(color.hex);
  };

  const handlePickerToggle = () => {
    setShowPicker(!showPicker);
  };

  const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    // Store the selected color in local storage whenever it changes
     typeof(window) !== 'undefined' && window.localStorage.setItem(storageKey, selectedColor);
  }, [selectedColor, storageKey]);

  return (
    <div ref={pickerRef} className='grid mx-auto content-center items-center justify-center gap-0 justify-items-center'>
      <div
        className='mt-2'
        style={{
          width: '235px',
          height: '30px',
          background: selectedColor,
          cursor: 'pointer',
          borderRadius: '3px'
        }}
        onClick={handlePickerToggle}
      ></div>
      {showPicker && (
        <div style={{ position: 'absolute', zIndex: 1 }}>
          <SketchPicker color={selectedColor} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
