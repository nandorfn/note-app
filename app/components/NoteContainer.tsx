import Note from "./Note";

const NoteContainer: React.FC = () => {
    return (
        <>
          <div  className="flex flex-col gap-10 bg-white rounded-xl shadow-sm p-8 h-auto w-auto lg:mx-10">
            <h1 className="text-4xl font-medium ">Notes</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
              <Note />
              <Note />
              <Note />
              <Note />
              <Note />
              <Note />
              <Note />
              <Note />
              <Note />
              <Note />
              <Note />
            </div>
          </div>
        </>
    );
};

export default NoteContainer;