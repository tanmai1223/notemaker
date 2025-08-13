import React from "react";
import style from "../styles/main.module.css";
import NoteCard from "./NoteCard";



function NotesList({ notes, selectedGroup }) {
  return (
    <>
     
      <div className={style.mainContainer}>
        {notes
          .filter((note) => note.group === selectedGroup.name)
          .map((note, index) => (
            <NoteCard key={index} note={note} />
          ))}
      </div>
    </>
  );
}

export default NotesList;
