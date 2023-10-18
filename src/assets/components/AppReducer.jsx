import { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import Header from "./Header";
import Text from "./Text";
import List from "./List";
import "./App.css";

function stateReducer(state, action) {
  if (action.type === "ADD_CLASS") {
    return {
      textClass: state.isClassApplied ? "" : "white",
      textContainerClass: state.isClassApplied ? "" : "dark",
      buttonText: state.isClassApplied
        ? "Clicca per sfondo nero"
        : "Clicca per sfondo bianco",
      isClassApplied: !state.isClassApplied,
    };
  }
}

function AppReducer() {
  const initialState = {
    textClass: "",
    textContainerClass: "",
    isClassApplied: false,
    buttonText: "Clicca per sfondo nero",
  };
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const [textButton, setTextButton] = useState("Clicca per sfondo nero");

  const message = "we do websites , mobile and digital campaigns.";
  const datiNav = [
    {
      id: 1,
      nome: "work",
    },
    { id: 2, nome: "about" },
    { id: 3, nome: "services" },
    { id: 4, nome: "news" },
    { id: 5, nome: "contact" },
  ];
  const list = [
    { id: 1, text: "Frontend: React.js" },
    { id: 2, text: "Style: Sass" },
    { id: 3, text: "Backend:Node.js (Express framework)" },
  ];

  const handleButton = () => {
    dispatch({ type: "ADD_CLASS" }); //se la classe è gia applicata resetta lo stato e toglie cosi le classi
  };

  return (
    <>
      <Header dati={datiNav} />
      <main>
        <div className={`text-container ${state.textContainerClass}`}>
          <Text
            message={message}
            handle={handleButton}
            textClass={state.textClass}
            buttonText={state.buttonText}
          />
        </div>
        <div className="list-container">
          <List list={list} />
        </div>
      </main>
    </>
  );
}

export default AppReducer;
