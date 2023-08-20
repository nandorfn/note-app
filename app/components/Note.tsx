interface NoteProps {
  notes: {
    title: string;
    content: string;
    id: number;
  }[];
}
const Note: React.FC<NoteProps> = ({ notes }) => {
    return (
        <>
          {notes.map(note => (
            <div key={note.id} className="bg-green-200 rounded-xl h-80 p-4 basis-1/2 ">
            <h2 className="text-2xl">{note.title}</h2>
            <p>{note.content}</p>
          </div>
          ))
          
          }
        </>
    );
};

export default Note;