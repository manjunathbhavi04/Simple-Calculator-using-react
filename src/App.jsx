import Input from "./components/Input";
import styles from "./App.module.css";
import Buttoncontainer from "./components/Buttoncontainer";
import Heading from "./components/Heading";
import { useState } from "react";

function App() {

  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const textInput = (event) => {
    console.log(event);
  }

  const handleClick = (event) => {
    if (event.target.value === "="){
      setText(eval(text));
    }
    else if( event.target.value === "C" ){
      setText("");
    }
    else{
      let newExpression = (event.target.value);
      setText(text + newExpression);
    }
    
  }

  let [text, setText] = useState("");
  return (
    <>
      <div className={styles.calculator} >
        <Heading />
        <Input newValue = {text} handleOnChange = {(event) => textInput(event)}/>
        <Buttoncontainer buttonNames= {buttonName} handleOnClick = {(event) => handleClick(event)} />   
      </div>
    </>
  );
}

export default App;
