import React, {useState} from 'react'
//console.log();
export default function TextForm(props) {
const [text, setText] = useState('Enter text here james bond');
const handleUpClick = () => {
  //console.log("Uppercase was clicked");
  let newTextUp = text.toUpperCase();
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
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" id="myBox" rows="6" onChange={handleOnchange} value={text}></textarea>
      </div>
      <button className="btn btn-primary my-2" onClick={handleUpClick}>To Upper-Case</button> &nbsp;
      <button className="btn btn-primary" onClick={handleLowClick}>To Lower-Case</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * (text.split(" ").length)} Minutes in read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
