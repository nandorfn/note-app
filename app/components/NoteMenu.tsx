interface NoteProps {
  note: {
    title: string;
    content: string;
    id: number;
  };
  activeNoteId: number | null;
}

const NoteMenu: React.FC<NoteProps> = ({ note, activeNoteId }) => {

  const btnColor = {
    red: {
      color: '#ff2222'
    }
  }

  return (
    <>
      {
        activeNoteId === note.id
          ? <div className='absolute right-2 bottom-0 pb-6 w-full bg-green-200'>
            <div className='mx-4 flex justify-end gap-6'>
              <button type="button">
                <i className="fa-solid fa-pen fa-lg cursor-pointer"></i>
              </button>
              <button>
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