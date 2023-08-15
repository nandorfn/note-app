
const page: React.FC = () => {
    return (
        <>
          <form className="flex flex-col bg-red-300 gap-10 p-8 min-h-screen">
            <textarea placeholder="Title..." />
            <textarea className="h-screen" placeholder="Content..." />
          </form>
        </>
    );
};

export default page;