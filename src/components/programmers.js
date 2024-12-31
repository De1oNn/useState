/*
PROGRAMMERS Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/1ea6e6a2-2ef1-45de-bcab-b99a8f775870_programmers.gif

This component keeps track of a list of pioneers in the field of programming on the one hand,
and the id of the currently celebrated programmer on the other. That's two slices of state!
We can only feature one awesome programmer at a time.

Find comments below to help you along.
*/
import React, { useState } from "react";

// Use this variable ONLY to initialize a slice of state!
// There is something in the JSX right now breaking this rule.
const listOfAwesome = [
  { id: "1", name: "Ada Lovelace" },
  { id: "2", name: "Grace Hopper" },
  { id: "3", name: "Evelyn Boyd Granville" },
  { id: "4", name: "Mary Kenneth Keller" },
  { id: "5", name: "Frances Allen" },
  { id: "6", name: "Carol Shaw" },
];
const first = listOfAwesome.map(item => item)[0]
const second = listOfAwesome.map(item => item)[1]
const third = listOfAwesome.map(item => item)[2]
const fourth = listOfAwesome.map(item => item)[3]
const fifth = listOfAwesome.map(item => item)[4]
const sixth = listOfAwesome.map(item => item)[5]


export default function Programmers() {
  
  // We'll have to use the state hook twice, as we need two slices of state.
  // The programmers on the one hand, and the id of the featured programmer on the other.
  const [string, setstring] = useState(listOfAwesome);
  const getNameOfFeatured = () => {
    // This is not an event handler but a helper function. See its usage below.
    // It's going to need information from both slices of state!
    // Using the currently celebrated id, find inside the programmers slice of state
    // the _name_ of the currently celebrated programmer, and return it.
  };

  const style = {
    fontSize: "1.5em",
    marginTop: "0.5em",
    color: "royalblue", // 🤔
  };
  function firstname() {
    setstring(string);
  }
  function secondname() {
    setstring(string)
  }
  function thirdname() {

  }
  function fourthname() {

  }
  function fifthname() {

  }
  function sixthname() {

  }

  return (
    <div className="widget-programmers container">
      <h2>Programmers</h2>
      <div className="programmers"
      > 
        <button onClick={firstname}>{first.name}</button>
        <button onClick={secondname}>{second.name}</button>
        <button onClick={thirdname}>{third.name}</button>
        <button onClick={fourthname}>{fourth.name}</button>
        <button onClick={fifthname}>{fifth.name}</button>
        <button onClick={sixthname}>{sixth.name}</button>
      </div>
      <div>
        
      </div>
    </div>
  );
}
