"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// import { CommentFormButton } from "./CommentFormButton";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Type your comment...</p>",
  });

  return (
    <>
      <EditorContent editor={editor} />
      {/* <textarea
        name="comment"
        className="bg-zinc-200 p-3 rounded"
        placeholder="Type your comment..."
      /> */}
    </>
  );
};

export default Tiptap;
