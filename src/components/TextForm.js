import React, { useState } from 'react'


export default function TextForm(){
    const handlerchage=(e)=>{
        setText(e.target.value);
    }

    const hadlerUpperClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
        const [text,setText]=useState("Enter Your Text Here!")
    return(
        <div className="container my-5">

<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handlerchage} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className="btn btn-primary" onClick={hadlerUpperClick}>Text change to Upper Case</button>
        </div>

    )
}
