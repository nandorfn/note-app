'use client'

import axios from "axios";
import DoneBtn from "@/app/components/DoneBtn";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Editor: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const router = useRouter();
  const handleClick = async (e: SyntheticEvent) => {
  e.preventDefault();
  await axios.post("/api/notes", {
    title: title,
    content: content,
  });
  setTitle('');
  setContent('');
  router.push('/');
  window.location.reload();
  };


  return (
    <>
      <form className="flex flex-col mx-10 p-8 bg-white rounded-lg shadow-sm h-screen">
        <textarea
          onChange={(e) => setTitle(e.target.value)} className="text-4xl resize-none border-b-2 border-slate-100 focus:outline-none" placeholder="Title"
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          className="resize-none focus:outline-none pt-4 h-screen"
          placeholder="Content" />
      </form>
      <button
        onClick={handleClick}
        type="submit"
        className="sticky left-full me-12 lg:me-20 bottom-10 bg-green-400 rounded-full w-16 h-16 shadow-sm flex justify-center items-center">
        <DoneBtn />
      </button>
    </>
  );
};

export default Editor;