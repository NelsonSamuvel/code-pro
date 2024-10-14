import { useState } from "react";
import InsertBlock from "./InsertBlock";

import { EditorContent, Extension, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlock from "@tiptap/extension-code-block";
import TextStyle from "@tiptap/extension-text-style";

const slashCommand = (setShowMenu: (value: boolean) => void) =>
  Extension.create({
    addKeyboardShortcuts() {
      return {
        "/": () => {
          setShowMenu(true);
          return true;
        },
      };
    },
  });

const TipTap = () => {
  const [showMenu, setShowMenu] = useState(false);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "editor",
      },
    },

    extensions: [
      StarterKit,
      slashCommand(setShowMenu),
      CodeBlock.configure({
        HTMLAttributes: {
          class: "codeBlock",
        },
      }),
      TextStyle,
    ],

    // onUpdate: ({ editor }) => {
    //   const { from } = editor.state.selection;

    //   const lastChar = editor.getText({ from: from - 1, to: from });

    //   if (lastChar === "/") {
    //     setShowMenu(true);
    //   } else {
    //     setShowMenu(false);
    //   }
    // },
    autofocus: true,
  });

  return (
    <section className="max-container py-4 px-6">
      <EditorContent editor={editor} />
      {showMenu && (
        <InsertBlock editor={editor} onShowFalse={() => setShowMenu(false)} />
      )}
    </section>
  );
};

export default TipTap;
