'use client'
import { useState } from "react";
import NoteMenu from './NoteMenu';

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
          <p className='truncate' dangerouslySetInnerHTML={{ __html: note.content.replace(/\n/g, "<br>") }} />
            <NoteMenu activeNoteId={activeNoteId} note={note}/>
        </div>
      ))}
    </>
  );
};

export default Note;