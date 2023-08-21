interface NoteProps {
  note: {
    title: string;
    content: string;
    id: number;
  };
  activeNoteId: number | null;
}

const NoteMenu: React.FC<NoteProps> = ({note, activeNoteId }) => {
    return (
        <>
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
        </>
    );
};

export default NoteMenu;