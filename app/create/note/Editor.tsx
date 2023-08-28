'use client'

import axios from "axios";
import DoneBtn from "@/app/components/DoneBtn";
import { SyntheticEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Editor: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [color, setColor] = useState<string>('bg-lime-300');
  const [userId, setUserID] = useState<string>('');
  
  const router = useRouter();
  useEffect(() => {
    const tokenCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="));

    let token = null;
    if (tokenCookie) {
      token = tokenCookie.substring("authToken=".length);
    }
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const decodedToken = JSON.parse(window.atob(base64));
      setUserID(decodedToken.userId);
    }
  }, []);

  const handleClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("/api/notes", {
      title: title,
      content: content,
      color: color,
      userId: userId,
    });
    setTitle('');
    setContent('');
    setColor('bg-lime-300');
    router.push('/notes');
    router.refresh();
  };



  return (
    <>
      <form className="flex flex-col lg:mt-4 p-8 bg-white rounded-lg shadow-sm h-screen">
        <select onChange={(e) => setColor(e.target.value)} className={`flex self-end rounded-md mb-2 px-4 py-1 w-32`}>
          <option value="bg-lime-300">Green</option>
          <option value="bg-amber-100">Amber White</option>
          <option value="bg-sky-300">Sky Blue</option>
          <option value="bg-orange-400">Orange</option>
          <option value="bg-yellow-300">Yellow</option>
        </select>
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