'use client'
import { sanitize } from 'dompurify';
import { useState } from "react";

interface NoteProps {
  notes: {
    title: string;
    content: string;
    id: number;
  }[];
}
const Note: React.FC<NoteProps> = ({ notes }) => {
  const [activeNoteId, setActiveNoteId] = useState<number | null>(null);

  const handleActive = (noteId: number): void => {
    setActiveNoteId((prevNoteId) => (prevNoteId === noteId ? null : noteId));
  };

  return (
    <>
      {notes.map((note) => (
        <div
          onClick={() => handleActive(note.id)}
          key={note.id}
          className={`bg-green-200 rounded-xl h-64 p-4 basis-1/2 overflow-hidden relative ${activeNoteId === note.id ? "border-2 border-black" : ""
            }`}
        >
          <h2 className="lg:text-2xl">{note.title}</h2>
          <p className='break-all truncate' dangerouslySetInnerHTML={{ __html: note.content.replace(/\n/g, "<br>") }} />
          {
            activeNoteId === note.id
              ? <div className={`absolute left-0 bottom-0 pb-4 w-full bg-green-200`}>
                <div className='mx-4 flex justify-end gap-4'>
                  <i className="fa-solid fa-pen"></i>
                  <i className="fa-solid fa-trash-can"></i>
                </div>
              </div>
              : null
          }
        </div>
      ))}
    </>
  );
};

export default Note;