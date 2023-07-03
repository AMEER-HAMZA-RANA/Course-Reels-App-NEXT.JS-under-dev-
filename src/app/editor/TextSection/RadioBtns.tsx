'use client'
import React, { useState, useEffect } from 'react';


const RadioButtons = () => {
  const [alignment, setAlignment] = useState("text-align:left");

  useEffect(() => {
    const savedAlignment =  typeof(window) !== 'undefined' && window.localStorage.getItem("alignment");
    if (savedAlignment) {
      setAlignment(savedAlignment);
    }
  }, []);

  const handleAlignmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAlignment = event.target.value;
    setAlignment(newAlignment);
     typeof(window) !== 'undefined' && window.localStorage.setItem("alignment", newAlignment);
  };

  return (
    <div className="flex gap-x-2">
      {/* left */}
      <div className="flex">
        <input
          type="radio"
          id="left"
          className="peer hidden"
          name="alignment"
          value="text-align:left"
          checked={alignment === "text-align:left"}
          onChange={handleAlignmentChange}
        />
        <label
          htmlFor="left"
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
            <path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>{" "}
        </label>
      </div>

      {/* right */}
      <div className="flex">
        <input
          type="radio"
          id="right"
          className="peer hidden"
          name="alignment"
          value="text-align:right"
          checked={alignment === "text-align:right"}
          onChange={handleAlignmentChange}
        />
        <label
          htmlFor="right"
          className="select-none cursor-pointer rounded-lg border-2 border-gray-200
        py-1 px-1 font-bold text-gray-200 transition-colors duration-200 ease-in-out bg-gray-200 peer-checked:bg-purple-400 peer-checked:text-gray-900     peer-checked:border-purple-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto p-[2px] fill-black "
            height="1.2em"
            viewBox="0 0 448 512"
          >
            <path d="M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </label>
      </div>

      {/* center */}
      <div className="flex">
        <input
          type="radio"
          id="center"
          className="peer hidden"
          name="alignment"
          value="text-align:center"
          checked={alignment === "text-align:center"}
          onChange={handleAlignmentChange}
        />
        <label
          htmlFor="center"
          className="select-none cursor-pointer rounded-lg border-2 border-gray-200
        py-1 px-1 font-bold text-gray-200 transition-colors duration-200 ease-in-out bg-gray-200 peer-checked:bg-purple-400 peer-checked:text-gray-900     peer-checked:border-purple-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto p-[2px] fill-black "
            height="1.2em"
            viewBox="0 0 448 512"
          >
            <path d="M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z" />
          </svg>{" "}
        </label>
      </div>

      {/* justify */}
      <div className="flex">
        <input
          type="radio"
          id="justify"
          className="peer hidden"
          name="alignment"
          value="text-align:justify"
          checked={alignment === "text-align:justify"}
          onChange={handleAlignmentChange}
        />
        <label
          htmlFor="justify"
          className="select-none cursor-pointer rounded-lg border-2 border-gray-200
        py-1 px-1 font-bold text-gray-200 transition-colors duration-200 ease-in-out bg-gray-200 peer-checked:bg-purple-400 peer-checked:text-gray-900     peer-checked:border-purple-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto p-[2px] fill-black "
            height="1.2em"
            viewBox="0 0 448 512"
          >
            <path d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" />
          </svg>{" "}
        </label>
      </div>
    </div>
  );
}



export default RadioButtons;

/*
 <div className="flex">
          <input
            type="radio"
            id="justify"
            className="peer hidden"
            name="alignment"
            value="justify"
          />
          <label
            htmlFor="justify"
            className="select-none cursor-pointer rounded-lg border-2 border-gray-200
py-1 px-1 font-bold text-gray-200 transition-colors duration-200 ease-in-out bg-gray-200 peer-checked:bg-purple-400 peer-checked:text-gray-900     peer-checked:border-purple-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto p-[2px] fill-black "
              height="1.2em"
              viewBox="0 0 448 512"
            >
              <path d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" />
            </svg>{" "}
          </label>
        </div>
      </div>
*/