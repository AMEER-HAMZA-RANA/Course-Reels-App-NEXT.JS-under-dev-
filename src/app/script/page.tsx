"use client";
import React from "react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Script() {
  const [title, setTitle] = useState("");
  const [script, setScript] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleScriptChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setScript(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform actions with the form data, such as storing it or submitting to an API

    // Reset the form fields
    if (title.length != 0) {
      setTitle("");
      setScript("");
    }
  };

  const handleClick = () => {
    if (pathname === "/script" && title.length != 0) {
      router.push("/editor");
    }
    console.log("Title:", title);
    console.log("Script:", script);
  };

  return (
    // <!-- Main Script Section -->
    <section id="script-page">
      <div className="container pl-36 py-8 text-white">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title (required)"
            className="block p-3 w-[776px] rounded-lg focus:outline-none bg-slate-900"
            onChange={handleTitleChange}
            value={title}
          />
          <br />
          <textarea
            id="w3review"
            name="w3review"
            rows={14}
            cols={100}
            className="p-3 mt-0 rounded-lg focus:outline-none overflow-hidden bg-slate-900 resize-none w-[776px]"
            placeholder="Add your Script"
            onChange={handleScriptChange}
            value={script}
          ></textarea>
          <button
            type="submit"
            className={
              title.length !== 0
                ? "bg-white text-black px-14 py-2 border-2 border-violet-500 font-bold bg-gradient-to-br hover:from-blue-900 hover:to-purple-900 hover:text-white  absolute top-[1.12rem] right-6 z-50 transition-all duration-200"
                : "bg-white text-black px-14 py-2 border-2 border-violet-500 font-bold absolute top-[1.12rem] right-6 z-50 cursor-not-allowed"
            }
            onClick={handleClick}
          >
            Create
          </button>
        </form>
      </div>
    </section>
  );
}
