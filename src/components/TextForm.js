import React, { useState } from "react";

export default function TextEditor() {
  const [editorContent, setEditorContent] = useState(""); // State to store editor content

  const handleBoldClick = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    console.log(selectedText);

    if (selectedText) {
      const formattedText = `<strong>${selectedText}</strong>`;
      const newContent =
        editorContent.slice(0, selection.baseOffset) +
        formattedText +
        editorContent.slice(selection.extentOffset);

      setEditorContent(newContent);
    }
  };

  // const handleEditorChange = (e) => {
  //   setEditorContent(e.target.value);
  // };

  return (
    <div className="container my-5">
      <div className="form-control">
        <button className="btn btn-primary" onClick={handleBoldClick}>
          Bold
        </button>
      </div>
      <div className="mb-3">
        <div
          className="form-control"
          contentEditable
          // onInput={handleEditorChange}
          dangerouslySetInnerHTML={{ __html: editorContent }}
        ></div>
      </div>
      
    </div>
  );
}