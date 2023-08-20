'use client'
import { useState } from "react";

const Editor: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  console.log(title);
  console.log(content);

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
        </>
    );
};

export default Editor;