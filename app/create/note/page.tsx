const page: React.FC = () => {
    return (
        <>
          <form className="flex flex-col mx-10 p-8 bg-white rounded-lg shadow-sm ">
            <textarea className=" border-b-2 border-slate-100 resize-none focus:outline-none" placeholder="Title" />
            <textarea className="resize-none focus:outline-none pt-4" placeholder="Content" />
          </form>
        </>
    );
};

export default page;