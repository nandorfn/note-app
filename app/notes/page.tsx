import NoteContainer from "./NoteContainer";
import Note from "./Note";
import { getData } from "../utils/queryDb";
getData

const page = async () => {
  const notes = await getData('notes');
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