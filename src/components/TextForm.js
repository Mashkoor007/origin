import React, {useState} from 'react'
//console.log();
export default function TextForm(props) {
const [text, setText] = useState('Enter text here2');
const handleUpClick = () => {
  //console.log("Uppercase was clicked");
  let newTextUp = text.toUpperCase();
  alert("Hello");//12/12/2024-09:01:10PM
  setText(newTextUp);
}
const handleLowClick = () => {
  //console.log("Uppercase was clicked");
  let newTextlow = text.toLowerCase();
  setText(newTextlow);
}
const handleOnchange = (event) => {
  //console.log("On change was clicked");
  setText(event.target.value);
}
//setText ("New Text by setText");
//setText("dhjkgdfjhsgj");
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" id="myBox" rows="6" onChange={handleOnchange} value={text}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upper-Case</button> &nbsp;
      <button className="btn btn-primary" onClick={handleLowClick}>Convert To Lower-Case</button>

    </div>
  );
}
