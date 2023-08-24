import Note from "./Note";
interface NoteProps {
  notes: {
    title: string;
    content: string;
    color: string;
    id: number;
  }[];
  header: string;
  children: React.ReactNode;
}

const NoteContainer: React.FC<NoteProps> = ({notes, header, children}) => {

  return (
    <>
      <div className="flex flex-col gap-10 bg-white rounded-xl shadow-sm p-8 h-auto w-auto">
        <h1 className="text-4xl font-medium ">{header}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 min-h-screen">
          {children}
        </div>
      </div>
    </>
  );
};

export default NoteContainer;