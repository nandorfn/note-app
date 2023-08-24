'use client'
import { useState } from "react";
import NoteMenu from './NoteMenu';
import { useRouter } from "next/navigation";

interface NoteProps {
  notes: {
    title: string;
    content: string;
    color: string;
    id: number;
  }[];
}
const Note: React.FC<NoteProps> = ({ notes }) => {
  const [activeNoteId, setActiveNoteId] = useState<number | null>(null);
  const handleActive = (noteId: number): void => {
    setActiveNoteId((prevNoteId) => (prevNoteId === noteId ? null : noteId));
  };

  const router = useRouter();
  const handleEdit = (noteId: number): void => {
    router.push(`notes/${noteId}`);
  };

  return (
    <>
      {notes.map((note) => (
        <div
          onClick={() => handleActive(note.id)}
          onDoubleClick={() => handleEdit(note.id)}
          key={note.id}
          className={`${note.color} rounded-xl h-64 p-4 basis-1/2 overflow-hidden relative ${activeNoteId === note.id ? "border-2 border-black" : ""
            }`}
        >
          <h2 className="lg:text-2xl">{note.title}</h2>
          <p className='truncate' dangerouslySetInnerHTML={{ __html: note.content.replace(/\n/g, "<br>") }} />
          <NoteMenu activeNoteId={activeNoteId} note={note} handleEdit={handleEdit} />
        </div>
      ))}

    </>
  );
};

export default Note;