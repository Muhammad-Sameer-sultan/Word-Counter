// TextEditor.js

import React, { useState } from "react";
// import "./TextEditor.css"; // Import your stylesheet for styling

export default function TextEditor() {
  const [editorContent, setEditorContent] = useState("");

  const handleStyleClick = (style) => {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText) {
      let formattedText;

      switch (style) {
        case "bold":
          formattedText = `<strong>${selectedText}</strong>`;
          break;
        case "italic":
          formattedText = `<em>${selectedText}</em>`;
          break;
        case "underline":
          formattedText = `<u>${selectedText}</u>`;
          break;
        // Add cases for other styles as needed

        default:
          formattedText = selectedText;
      }

      const updatedContent = insertFormattedText(editorContent, formattedText, selection);
      setEditorContent(updatedContent);
    }
  };

  // const handleAlignmentClick = (alignment) => {
  //   const updatedContent = `<div style="text-align: ${alignment};">${editorContent}</div>`;
  //   setEditorContent(updatedContent);
  // };

  const insertFormattedText = (content, formattedText, selection) => {
    const startOffset = selection.focusOffset;
    const endOffset = selection.anchorOffset;

    const beforeSelection = content.substring(0, startOffset);
    const afterSelection = content.substring(endOffset);

    return beforeSelection + formattedText + afterSelection;
  };

  const handleEditorChange = (e) => {
    setEditorContent(e.target.innerHTML);
  };

  return (
    <div className="text-editor-container">
      <div className="format-options">
        <button onClick={() => handleStyleClick("bold")}>
          <b>B</b>
        </button>
        <button onClick={() => handleStyleClick("italic")}>
          <i>I</i>
        </button>
        <button onClick={() => handleStyleClick("underline")}>
          <u>U</u>
        </button>
        {/* <button onClick={() => handleAlignmentClick("left")}>
          Left
        </button>
        <button onClick={() => handleAlignmentClick("center")}>
          Center
        </button>
        <button onClick={() => handleAlignmentClick("right")}>
          Right
        </button>
        <button onClick={() => handleAlignmentClick("justify")}>
          Justify
        </button> */}
        {/* Add other buttons as needed */}
      </div>
      <div className="editor-container">
        <div
          id="editor"
          className="editor"
          contentEditable
          onBlur={handleEditorChange}
          dangerouslySetInnerHTML={{ __html: editorContent }}
        ></div>
      </div>
    </div>
  );
}
