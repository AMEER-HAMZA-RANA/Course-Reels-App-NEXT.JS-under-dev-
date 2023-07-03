"use client";
import { useState, useEffect } from "react";
import ColorPicker from "../../components/ColorPicker";
import ApplyBtn from "../TextSection/ApplyBtn";

const AlignmentRadioButtons = () => {
  //   const [alignment, setAlignment] = useState<string>("left");
  //   const [showInput, setShowInput] = useState<boolean>(false);

  //   useEffect(() => {
  //     // Retrieve the alignment state from local storage on component mount
  //     const storedAlignment =  typeof(window) !== 'undefined' && window.localStorage.getItem("alignment");
  //     if (storedAlignment) {
  //       setAlignment(storedAlignment);
  //     }
  //   }, []);

  //   const handleAlignmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const newAlignment = event.target.value;
  //     setAlignment(newAlignment);
  //     setShowInput(true);
  //     // Store the alignment state in local storage
  //      typeof(window) !== 'undefined' && window.localStorage.setItem("alignment", newAlignment);
  //   };
  const [backgroundType, setBackgroundType] = useState<string>("color");
  const [showColorPicker, setShowColorPicker] = useState<boolean>(true);
  const [showImageUpload, setShowImageUpload] = useState<boolean>(false);
  const [showVideoUpload, setShowVideoUpload] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve the background type and states from local storage on component mount
    const storedBackgroundType =  typeof(window) !== 'undefined' && window.localStorage.getItem("backgroundType");
    const storedShowColorPicker =  typeof(window) !== 'undefined' && window.localStorage.getItem("showColorPicker");
    const storedShowImageUpload =  typeof(window) !== 'undefined' && window.localStorage.getItem("showImageUpload");
    const storedShowVideoUpload =  typeof(window) !== 'undefined' && window.localStorage.getItem("showVideoUpload");

    if (storedBackgroundType) {
      setBackgroundType(storedBackgroundType);
    }

    if (storedShowColorPicker) {
      setShowColorPicker(storedShowColorPicker === "true");
    }

    if (storedShowImageUpload) {
      setShowImageUpload(storedShowImageUpload === "true");
    }

    if (storedShowVideoUpload) {
      setShowVideoUpload(storedShowVideoUpload === "true");
    }
  }, []);

  const handleBackgroundTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newBackgroundType = event.target.value;
    setBackgroundType(newBackgroundType);

    // Store the background type in local storage
     typeof(window) !== 'undefined' && window.localStorage.setItem("backgroundType", newBackgroundType);

    // Update the showing field states and store them in local storage
    if (newBackgroundType === "color") {
      setShowColorPicker(true);
      setShowImageUpload(false);
      setShowVideoUpload(false);
       typeof(window) !== 'undefined' && window.localStorage.setItem("showColorPicker", "true");
       typeof(window) !== 'undefined' && window.localStorage.setItem("showImageUpload", "false");
       typeof(window) !== 'undefined' && window.localStorage.setItem("showVideoUpload", "false");
    } else if (newBackgroundType === "image") {
      setShowColorPicker(false);
      setShowImageUpload(true);
      setShowVideoUpload(false);
       typeof(window) !== 'undefined' && window.localStorage.setItem("showColorPicker", "false");
       typeof(window) !== 'undefined' && window.localStorage.setItem("showImageUpload", "true");
       typeof(window) !== 'undefined' && window.localStorage.setItem("showVideoUpload", "false");
    } else if (newBackgroundType === "video") {
      setShowColorPicker(false);
      setShowImageUpload(false);
      setShowVideoUpload(true);
       typeof(window) !== 'undefined' && window.localStorage.setItem("showColorPicker", "false");
       typeof(window) !== 'undefined' && window.localStorage.setItem("showImageUpload", "false");
       typeof(window) !== 'undefined' && window.localStorage.setItem("showVideoUpload", "true");
    }
  };

  // const [backgroundType, setBackgroundType] = useState<string>("color");
  //   const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  //   useEffect(() => {
  //     // Retrieve the background type from local storage on component mount
  //     const storedBackgroundType =  typeof(window) !== 'undefined' && window.localStorage.getItem("backgroundType");
  //     if (storedBackgroundType) {
  //       setBackgroundType(storedBackgroundType);
  //     }
  //   }, []);

  //   const handleBackgroundTypeChange = (
  //     event: React.ChangeEvent<HTMLInputElement>
  //   ) => {
  //     const newBackgroundType = event.target.value;
  //     setBackgroundType(newBackgroundType);
  //     setShowColorPicker(newBackgroundType === "color");
  //     // Store the background type in local storage
  //      typeof(window) !== 'undefined' && window.localStorage.setItem("backgroundType", newBackgroundType);
  //   };

  return (
    // <div className=" h-[100vh] w-[300px] bg-gray-800 text-white py-8 px-8 max-w-sm overflow-visible">
    //     <div>
    //   {/* left */}
    //   <label>
    //     <input
    //       type="radio"
    //       name="alignment"
    //       value="left"
    //       checked={alignment === "left"}
    //       onChange={handleAlignmentChange}
    //     />
    //     Left
    //   </label>
    //   {alignment === "left" && showInput && (
    //     <input type="text" placeholder="Input field for left alignment" />
    //   )}

    //   {/* center */}
    //   <label>
    //     <input
    //       type="radio"
    //       name="alignment"
    //       value="center"
    //       checked={alignment === "center"}
    //       onChange={handleAlignmentChange}
    //     />
    //     Center
    //   </label>
    //   {alignment === "center" && showInput && (
    //     <input type="text" placeholder="Input field for center alignment" />
    //   )}

    //   {/* right */}
    //   <label>
    //     <input
    //       type="radio"
    //       name="alignment"
    //       value="right"
    //       checked={alignment === "right"}
    //       onChange={handleAlignmentChange}
    //     />
    //     Right
    //   </label>
    //   {alignment === "right" && showInput && (
    //     <input type="text" placeholder="Input field for right alignment" />
    //   )}
    // </div>

    //   </div>
    <div className="h-[100vh] w-[300px] bg-gray-800 text-white py-8 px-8 max-w-sm overflow-visible flex flex-col gap-y-8">
      <div>
        {/* Background Color */}
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="backgroundType"
            value="color"
            checked={backgroundType === "color"}
            onChange={handleBackgroundTypeChange}
            className="w-4 h-4 "
          />
          <div>Background Color</div>
        </label>
        {showColorPicker && <ColorPicker storageKey="ColorPicker3" />}
      </div>

      <div className="">
        {/* Background Image */}
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="backgroundType"
            value="image"
            checked={backgroundType === "image"}
            onChange={handleBackgroundTypeChange}
            className="w-4 h-4 "
          />
          <div>Background Image</div>
        </label>
        {showImageUpload && (
          <div className="mt-2">
            {/* Your image upload button/component goes here */}
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="">
        {/* Background Video */}
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="backgroundType"
            value="video"
            checked={backgroundType === "video"}
            onChange={handleBackgroundTypeChange}
            className="w-4 h-4 "
          />
          <div>Background Video</div>
        </label>
        {showVideoUpload && (
          <div className="mt-2">
            {/* Your video upload button/component goes here */}
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Upload a Video file
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept="video/*"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}
      </div>
      <ApplyBtn storageKey="btn2" />
    </div>
  );
};

export default AlignmentRadioButtons;

// import { useState, useEffect } from "react";
// import ColorPicker from "../components/ColorPicker";

// const AlignmentRadioButtons = () => {

//   return (

//   );
// };

// export default AlignmentRadioButtons;
{
  /* <div>
      <label>
        <input
          type="radio"
          name="backgroundType"
          value="color"
          checked={backgroundType === "color"}
          onChange={handleBackgroundTypeChange}
        />
        Background Color
      </label>
      {backgroundType === "color" && showColorPicker && <ColorPicker storageKey="ColorPicker3"/>}
      </div>
      {/* Background Image */
}
// <label>
//   <input
//     type="radio"
//     name="backgroundType"
//     value="image"
//     checked={backgroundType === "image"}
//     onChange={handleBackgroundTypeChange}
//   />
//   Background Image
// </label>
// {backgroundType === "image" && (
//   <div>
//     {/* Your image upload button/component goes here */}
//     <input type="file" accept="image/*" />
//   </div>
// )}

// {/* Background Video */}
// <label>
//   <input
//     type="radio"
//     name="backgroundType"
//     value="video"
//     checked={backgroundType === "video"}
//     onChange={handleBackgroundTypeChange}
//   />
//   Background Video
// </label>
// {backgroundType === "video" && (
//   <div>
//     {/* Your video upload button/component goes here */}
//     <input type="file" accept="video/*" />
//   </div>
// )} */}
