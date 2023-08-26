import { useRouter } from "next/navigation";
import axios from "axios";
interface NoteProps {
  note: {
    title: string;
    content: string;
    color: string;
    id: number;
  };
  activeNoteId: number | null;
  handleEdit: (noteId: number) => void;
}

const NoteMenu: React.FC<NoteProps> = ({ note, activeNoteId, handleEdit }) => {
  const router = useRouter();

  const handleDelete = async ( noteId: number ) => {
    await axios.delete(`/api/notes/${noteId}`);
    router.refresh();
  };


  const btnColor = {
    red: {
      color: '#ff2222'
    }
  }

  return (
    <>
      {
        activeNoteId === note.id
          ? <div className={`absolute right-2 bottom-0 pb-6 w-full ${note.color}`}>
            <div className='mx-4 flex justify-end gap-6'>
              <button onClick={() => handleEdit(note.id)} type="button">
                <i className="fa-solid fa-pen fa-lg cursor-pointer"></i>
              </button>
              <button
                onClick={() => handleDelete(note.id)}
              >
                <i className="fa-solid fa-trash-can fa-lg cursor-pointer" style={btnColor.red}></i>
              </button>
            </div>
          </div>
          : null
      }
    </>
  );
};

export default NoteMenu;