import { useState } from "react";
import Header from "./Header";
import Text from "./Text";
import List from "./List";
import "./App.css";

function App() {
  const [textClass, setTextClass] = useState("");
  const [textContainerClass, settextContainerClass] = useState("");
  const [isClassApplied, setIsClassApplied] = useState(false);
  const [buttonText, setButtonText] = useState("Clicca per sfondo nero");

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
    if (isClassApplied) {
      setTextClass(""); //se la classe è gia applicata resetta lo stato e toglie cosi le classi
      settextContainerClass("");
      setButtonText("Clicca per sfondo nero");
    } else {
      setTextClass("white");
      settextContainerClass("dark");
      setButtonText("Clicca per sfondo bianco");
    }
    setIsClassApplied(!isClassApplied); //cambia valore nell opposto
  };
  return (
    <>
      <Header dati={datiNav} />
      <main>
        <div className={`text-container ${textContainerClass}`}>
          <Text
            message={message}
            handle={handleButton}
            textClass={textClass}
            buttonText={buttonText}
          />
        </div>
        <div className="list-container">
          <List list={list} />
        </div>
      </main>
    </>
  );
}

export default App;
