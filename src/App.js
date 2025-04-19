import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/TextForm';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){

  const [mode, setMode] = useState('light'); // Where dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showtAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      showtAlert("Dark mode has been enable","success");
      document.title = "TextUtils - Dark mode";
      setInterval(()=>{
        document.title = "TextUtils is amazing mode"; 
      },3000);
      setInterval(()=>{
        document.title = "Install TextUtils mode";
      },1500);
    }
    else{
      setMode('light')  
      document.body.style.backgroundColor = 'white'
      showtAlert("light mode has been enable","success");
      document.title = "TextUtils - light mode"
    }
  }
  return(
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform showtAlert={showtAlert} heading="Enter the text to analyze below" mode={mode} />
    {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Textform showtAlert={showtAlert} heading="Enter the text to analyze below" mode={mode} />} />
    </Routes> */}
    {/* <About/> */}
    </div>
    {/* </Router> */}
    </>
  );
}
export default App; 

