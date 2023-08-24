'use client'

import axios from "axios";
import DoneBtn from "@/app/components/DoneBtn";
import { SyntheticEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const NoteEditor: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [color, setColor] = useState<string>('');
  console.log(color);

  const params = useParams();
  useEffect(() => {
    axios.get(`/api/notes/${params.id}`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setColor(response.data.color);
      })
      .catch(error => console.error(error));
  }, [params.id]);

  const router = useRouter();
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.patch(`/api/notes/${params.id}`, {
      title: title,
      content: content,
      color: color
    });
    router.push('/notes');
    router.refresh();
  };

  return (
    <>
      <form className="flex flex-col p-8 bg-white rounded-lg shadow-sm h-screen">
        <select onChange={(e) => setColor(e.target.value)} className={`flex self-end rounded-md mb-2 px-4 py-1 w-32`}>
          <option value="bg-lime-300">Green</option>
          <option value="bg-amber-100">Amber White</option>
          <option value="bg-sky-300">Sky Blue</option>
          <option value="bg-orange-400">Orange</option>
          <option value="bg-yellow-300">Yellow</option>
        </select>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)} className="text-4xl resize-none border-b-2 border-slate-100 focus:outline-none" placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="resize-none focus:outline-none pt-4 h-screen"
          placeholder="Content" />
      </form>
      <button
        onClick={handleUpdate}
        type="submit"
        className="sticky left-full me-12 lg:me-20 bottom-10 bg-green-400 rounded-full w-16 h-16 shadow-sm flex justify-center items-center">
        <DoneBtn />
      </button>
    </>
  );
};

export default NoteEditor;