import { useState } from "react";

function Text({ message, handle, textClass, buttonText }) {
  const removePunctuation = (word) => {
    return word.replace(/[.,]/g, "");
  };
  return (
    <h1 className={textClass}>
      {message.split(" ").map((word, index) => {
        //divido la stringa in lettere singole
        const cleanedWord = removePunctuation(word);
        let className = "";
        if (["websites", "digital", "campaigns"].includes(cleanedWord)) {
          //se word è incluso nell'array

          className = "underline";
        }

        return (
          <span key={index} className={className}>
            {word}
            {index < message.split(" ").length - 1 && " "}
          </span> //se indice è minore della lunghezza delle parole presenti nell'array -l'ultimo carattere, allora riaggiungi uno spazio tra le parole
        );
      })}
      <button onClick={handle}>{buttonText}</button>
    </h1>
  );
}
export default Text;
