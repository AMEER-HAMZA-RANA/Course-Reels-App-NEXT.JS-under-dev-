import React, { useState, useEffect } from 'react';
interface ApplyBtnProps {
  storageKey: string; // Unique identifier for local storage key
}
// function ({storageKey: string}:any) {
const ApplyBtn: React.FC<ApplyBtnProps> = ({ storageKey }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  useEffect(() => {
    // Retrieve the checkbox state from local storage on component mount
    const storedState =  typeof(window) !== 'undefined' && window.localStorage.getItem(storageKey);
    if (storedState) {
      setIsChecked(JSON.parse(storedState));
    }
  }, [storageKey]);

  useEffect(() => {
    // Store the checkbox state in local storage whenever it changes
     typeof(window) !== 'undefined' && window.localStorage.setItem(storageKey, JSON.stringify(isChecked));
  }, [isChecked, storageKey]);

  return (
    <>
<div className="flex items-center justify-between mt-12">
<p className="font-bold text-md">Apply to all slides</p>

    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className={`w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full ${isChecked ? 'peer-checked:after:translate-x-full peer-checked:after:border-white' : ''} after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${isChecked ? 'peer-checked:bg-purple-600' : ''}`} />
    </label>
    </div>
    </>
  );
}

export default ApplyBtn;
