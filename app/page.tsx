import NoteContainer from "./components/NoteContainer";
import FloatingBtn from "./components/FloatingBtn";

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

const Home = async () => {
  const notes = await getProducts();

  return (
    <>
      <NoteContainer notes={notes} />
      <FloatingBtn />
    </>
  )
}

export default Home;