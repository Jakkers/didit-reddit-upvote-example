"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import customComment from "@rcode-link/tiptap-comments";

// import { CommentFormButton } from "./CommentFormButton";

const Tiptap = () => {
  //   const handleChange = (newContent) => {
  //     onChange(newContent);

  const editor = useEditor({
    extensions: [StarterKit],

    //session.user.id, postId, parentCommentId, formData.get("comment")

    content: "<p>Type your comment...</p>",
    immediatelyRender: false,
    // onUpdate: ({ editor }) => {
    //   handleChange(editor.getHTML());
    // },
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
