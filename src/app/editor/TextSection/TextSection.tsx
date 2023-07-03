"use client";
import React from "react";
import { useState, useEffect } from "react";
import ColorPicker from "../../components/ColorPicker";
import ApplyBtn from "./ApplyBtn";
import RadioButtons from "./RadioBtns";
import FontName from "./fontName";

function TextSection() {
  // select fields state managment
  const [fontSize, setFontSize] = useState(14);
  const [fontOpacity, setFontOpacity] = useState("Extra Light");

  

  const handleFontOpacityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log(event.target.value, fontOpacity)
    setFontOpacity(event.target.value);
  };

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value ,fontSize)
    setFontSize(Number(event.target.value));
  };

  // Checkboxes state management
  const [checkboxState, setCheckboxState] = useState({
    isUnderlineChecked: false,
    isBoldChecked: false,
    isItalicChecked: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    console.log(name, checked, checkboxState)
    setCheckboxState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Using useEffect to add user's checkbox choices to  typeof(window) !== 'undefined' && window.localStorage
  useEffect(() => {
    const storedCheckboxState =  typeof(window) !== 'undefined' && window.localStorage.getItem('checkboxState');
    console.log(storedCheckboxState)
    if (storedCheckboxState) {
      setCheckboxState(JSON.parse(storedCheckboxState));
    }
  }, []);

  useEffect(() => {
    // Store the checkbox state in local storage whenever it changes
     typeof(window) !== 'undefined' && window.localStorage.setItem("checkboxState", JSON.stringify(checkboxState));
  }, [checkboxState]);

  // Adding fontName, fontOpacity, fontSize to local storage
  

  useEffect(() => {
    const storedState =  typeof(window) !== 'undefined' && window.localStorage.getItem('fontOpacity')
    console.log(storedState)

    if(storedState) {
      setFontOpacity(JSON.parse(storedState))
    }
  },[])
  
  useEffect(() => {
     typeof(window) !== 'undefined' && window.localStorage.setItem('fontOpacity', JSON.stringify(fontOpacity));
  }, [fontOpacity])

  useEffect(() => {
    const storedState =  typeof(window) !== 'undefined' && window.localStorage.getItem('fontSize')
    console.log(storedState)

    if(storedState) {
      setFontSize(JSON.parse(storedState))
    }
  },[])
  
  useEffect(() => {
     typeof(window) !== 'undefined' && window.localStorage.setItem('fontSize', JSON.stringify(fontSize));
  }, [fontSize])

  // radio buttons state management
  // const [selectedValue, setSelectedValue] = useState('');
  // const radioOptions = [
  //   { value: 'option1', label: 'Option 1' },
  //   { value: 'option2', label: 'Option 2' },
  //   { value: 'option3', label: 'Option 3' },
  //   { value: 'option4', label: 'Option 4' },
  // ];
  return (
      <div className="h-[100vh] bg-gray-800 text-white w-[300px] ">
    <div className=" h-[65vh] w-full  py-5 px-8 max-w-sm overflow-y-auto ">
     <FontName/>

      <select
        id="font-opacity"
        value={fontOpacity}
        onChange={handleFontOpacityChange}
        className="bg-black rounded px-3 py-1  font-thin mt-1 w-full"
      >
        <option value="Extra Light">Extra Light</option>
        <option value="Light">Light</option>
        <option value="Normal">Normal</option>
        <option value="Dark">Dark</option>
        <option value="Extra Dark">Extra Dark</option>
      </select>

      <input
        type="number"
        id="font-size"
        value={fontSize}
        onChange={handleFontSizeChange}
        min={8}
        max={72}
        className="bg-black rounded px-3 py-1 outline-none border-none font-thin mt-1 w-full"
        placeholder="Range: 8 - 72"
      />

      <div className="grid grid-cols-7 gap-x-4 gap-y-3 items-center justify-center content-center mt-4 max-w-[250px] mx-auto">
        {/* italic */}
        <div className="flex">
          <input
            type="checkbox"
            id="italic"
            className="peer hidden"
            name="isItalicChecked"
            checked={checkboxState.isItalicChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="italic"
            className="select-none cursor-pointer rounded-lg border-2 border-gray-200
py-1 px-1 font-bold text-gray-200 transition-colors duration-200 ease-in-out bg-gray-200 peer-checked:bg-purple-400 peer-checked:text-gray-900     peer-checked:border-purple-400"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto p-[2px] fill-black "
              height="1.2em"
              viewBox="0 0 384 512"
            >
              <path d="M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z" />
            </svg>{" "}
          </label>
        </div>
        {/* bold */}
        <div className="flex">
          <input
            type="checkbox"
            id="bold"
            className="peer hidden"
            name="isBoldChecked"
            checked={checkboxState.isBoldChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="bold"
            className="select-none cursor-pointer rounded-lg border-2 border-gray-200
py-1 px-1 font-bold text-gray-200 transition-colors duration-200 ease-in-out bg-gray-200 peer-checked:bg-purple-400 peer-checked:text-gray-900     peer-checked:border-purple-400"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto p-[2px] fill-black "
              height="1.2em"
              viewBox="0 0 384 512"
            >
              <path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z" />
            </svg>{" "}
          </label>
        </div>
        {/* underline */}
        <div className="flex">
          <input
            type="checkbox"
            id="underline"
            className="peer hidden"
            name="isUnderlineChecked"
            checked={checkboxState.isUnderlineChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="underline"
            className="select-none cursor-pointer rounded-lg border-2 border-gray-200
py-1 px-1 font-bold text-gray-200 transition-colors duration-200 ease-in-out bg-gray-200 peer-checked:bg-purple-400 peer-checked:text-gray-900     peer-checked:border-purple-400"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto p-[2px] fill-black "
              height="1.2em"
              viewBox="0 0 448 512"
            >
              <path d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z" />
            </svg>{" "}
          </label>
        </div>

      <RadioButtons/>
      </div>


      <p className="font-bold text-md mt-5">Font Color</p>
      <ColorPicker storageKey="ColorPicker1" />

      <p className="font-bold text-md mt-5">Font Background</p>
      <ColorPicker storageKey="ColorPicker2" />

      <ApplyBtn storageKey="btn1"/>
    </div>
    </div>
  );
}

export default TextSection;
