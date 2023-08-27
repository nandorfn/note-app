import { middleware, config } from "../../middleware";
import NoteContainer from "./NoteContainer";
import Note from "./Note";
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

export {middleware, config}
const page = async () => {
  const notes = await getNote();
  const header:string = 'Notes';
  return (
    <>
      <NoteContainer notes={notes} header={header}>
        <Note notes={notes}/>
      </NoteContainer>
    </>
  );
};

export default page;