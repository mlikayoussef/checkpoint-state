import React from "react";
import logo from './logo.svg';
import './App.css';
import Personne from './Personne'
const { useState, useEffect, useRef } = React;

function App() {

  const [fullName, setFullName] = useState("Youssef");
  const [bio, setBio] = useState("lorem ipsum");
  const [profession, setProfession] = useState("web designer");
  const [show, setShow] = useState(0);
  const [counter, setCounter] = useState(0);
  setInterval(() => {
    setCounter(counter + 1);
  }, 1000);



  let componentPersonn;
  if (show == 1) {
    componentPersonn = <Personne fullName={fullName} bio={bio} profession={profession} />
  }



  return (
    <>
      <button onClick={() => setShow(!show)}> ClickMe</button>
      {componentPersonn}
        Timer :{counter}
    </>

  )

};

export default App;
