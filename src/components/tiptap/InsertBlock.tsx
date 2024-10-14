import { Editor } from "@tiptap/react";

type PropsType = {
  editor: Editor;
  onShowFalse: () => void;
};

type BlockType = "paragraph" | "codeBlock";

const InsertBlock = ({ editor, onShowFalse }: PropsType) => {
  const insertBlock = (blockType: BlockType) => {
    if (blockType === "paragraph") {
      editor.chain().focus().setParagraph().run();
    } else if (blockType === "codeBlock") {
      editor.chain().focus().setCodeBlock().run();
    }
    onShowFalse();
  };

  return (
    <div className="editorMenu">
      <ul className="flex flex-col gap-2">
        <li
          className="cursor-pointer hover:bg-stone-200 py-2 px-4"
          onClick={() => insertBlock("paragraph")}
        >
          Paragraph
        </li>
        <li
          className="cursor-pointer hover:bg-stone-200 py-2 px-4"
          onClick={() => insertBlock("codeBlock")}
        >
          CodeBlock
        </li>
      </ul>
    </div>
  );
};

export default InsertBlock;
