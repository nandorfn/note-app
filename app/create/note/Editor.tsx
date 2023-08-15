'use cleint'
import { BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  darkDefaultTheme,
  lightDefaultTheme,
  Theme,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";

const Editor: React.FC = () => {
  const editor: BlockNoteEditor = useBlockNote({});
  return (
    <>
      <BlockNoteView editor={editor} theme={lightDefaultTheme}/>
    </>
  );
};

export default Editor;