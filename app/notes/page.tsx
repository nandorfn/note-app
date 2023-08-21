import FloatingBtn from "@/app/components/FloatingBtn";
import NoteContainer from "@/app/components/NoteContainer";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getProducts = async () => {
  const res = await prisma.note.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
  });
  return res;
}


const page = async () => {
  const notes = await getProducts();
  return (
    <>
      <NoteContainer notes={notes} />
      <FloatingBtn />
    </>
  );
};

export default page;