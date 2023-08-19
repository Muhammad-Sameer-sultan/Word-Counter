import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");

  const handlerchange = (e) => {
    setText(e.target.value);
  };

  const hadlerUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const hadlerLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCapitalizeClick = () => {
    let newText = text.toLocaleLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setText(newText);
  };
  const handlerTrim = () => {
    const paragraph=text.replace(/\n+/g, '\n').split('\n');
    console.log(paragraph);
    const newText= paragraph.map(para=>para.replace(/\s+/g," ")).join("\n");
    setText(newText);
  };
  const hadlerclear = () => {
    setText("");
  };

  const handlerCopy = () => {
    
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container my-5">
      <div className="mb-3">
        <textarea
          className="form-control page"
          placeholder="Enter your Text"
          value={text}
          onChange={handlerchange}
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
        <p>Characters{text.length}</p>
        <p>Word{text.trim().split(/\s+/g).length}</p>
        <p></p>
      </div>
      <button className="btn btn-primary" onClick={hadlerUpperClick}>
        Text change to Upper Case
      </button>
      <button className="btn btn-primary" onClick={hadlerLowerClick}>
        Text change to Lower
      </button>
      <button className="btn btn-primary" onClick={handleCapitalizeClick}>
        Text change to Capitalize
      </button>
      <button className="btn btn-primary" onClick={hadlerclear}>
        clear
      </button>
      <button className="btn btn-primary" onClick={handlerTrim}>
        Remove Extra spaces
      </button>
      <button className="btn btn-primary" onClick={handlerCopy}>
        Clipboard
      </button>
    </div>
  );
}
