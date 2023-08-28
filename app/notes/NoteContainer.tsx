import Link from "next/link";
interface NoteProps {
  notes: {
    title: string;
    content: string;
    color: string;
    id: number;
  }[] | undefined;
  header: string;
  children: React.ReactNode;
}

const NoteContainer: React.FC<NoteProps> = ({notes, header, children}) => {

  return (
    <>
      <div className="flex flex-col gap-10 bg-white rounded-xl shadow-sm p-8 h-auto w-auto">
        <h1 className="text-4xl font-medium ">{header}</h1>
        <Link href="/create/note">
          <button className="bg-[#75E6AC] p-3 rounded-md w-36 text-white font-medium">New Task<i className="fa-solid fa-circle-check fa-fw ms-2 fa-lg"></i></button>
        </Link>
        <div className=" min-h-[68vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteContainer;