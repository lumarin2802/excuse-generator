/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);

  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );

  //          who[numero aleatorio]
  //console.log(who[Math.floor(Math.random() * who.length)]);
  //console.log(accion[Math.floor(Math.random() * who.length)]);
  //console.log(what[Math.floor(Math.random() * who.length)]);
  //console.log(when[Math.floor(Math.random() * who.length)]);
};
