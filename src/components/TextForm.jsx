import React, {useState} from 'react'

export default function Textform(props){
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        setText(text.toUpperCase())
        props.showtAlert("Converted to uppercase", "success")
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked");
        setText(text.toLowerCase())
        props.showtAlert("Converted to lowercase", "success")
    }
    const handleclearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showtAlert("Clear text", "success")
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
        
    }
    // Copy text
    const handleCopy = ()=>{
        console.log("I am copy");
        var text= document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value)
        props.showtAlert("Copied to Clipbord!", "success")
    }

    //Remove extra spaces
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showtAlert("Extra spaces removed", "success")
    }

    const handleTitleCase = () => {
        let newText = text.toLowerCase().split(" ").map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
        setText(newText);
    };
      
    const [text, setText] = useState('');
    // text = "new Text"; // Wrong way to change the state
    // setText("New text"); // Correct way to change the state
    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="container mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows='8'></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Space</button>
            <button className="btn btn-primary mx-1" onClick={handleTitleCase}>Title Case</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter something in the textbox to preview it here"}</p>
        </div>
        <div>
            
        </div>
        </>
    );
}