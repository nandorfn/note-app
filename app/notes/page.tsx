import FloatingBtn from "@/app/components/FloatingBtn";
import NoteContainer from "@/app/components/NoteContainer";
import Note from "../components/Note";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getNote = async () => {
  const res = await prisma.note.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      color: true,
    },
  });
  return res;
}


const page = async () => {
  const notes = await getNote();
  const header:string = 'Notes';
  return (
    <>
      <NoteContainer notes={notes} header={header}>
        <Note notes={notes}/>
      </NoteContainer>
      <FloatingBtn />
    </>
  );
};

export default page;