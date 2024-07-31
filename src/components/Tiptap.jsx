"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import customComment from "@rcode-link/tiptap-comments";

// import { CommentFormButton } from "./CommentFormButton";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      customComment.configure({
        user: {
          user_id: session.user.id,
          post_id: postId,
          parent_comment_id: parentCommentId,
          name: "comment",
        },
      }),
    ],

    //session.user.id, postId, parentCommentId, formData.get("comment")

    content: "<p>Type your comment...</p>",
    immediatelyRender: false,
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
