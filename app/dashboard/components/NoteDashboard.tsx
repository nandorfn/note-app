interface NoteProps {
  notes: {
    title: string;
    content: string;
    color: string;
    id: number;
  }[];
  children: React.ReactNode;
}

const NoteDashboard: React.FC<NoteProps> = ({notes, children}) => {

  return (
    <>
      <div className="flex flex-col gap-10 bg-white rounded-xl shadow-sm p-8 h-auto w-auto">
        <h1 className="text-4xl font-medium ">Note</h1>
        <div className=" min-h-[68vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteDashboard;