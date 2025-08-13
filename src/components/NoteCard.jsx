import React from "react";
import style from "../styles/main.module.css";

function NoteCard({ note }) {
  return (
    <div className={style.noteCard}>
      <p style={{ whiteSpace: "pre-wrap" }}>{note.text}</p>
      <div className={style.noteTimestamp}>
        <span>{note.time}</span>
        <span className={style.dot}>•</span>
        <span>{note.date}</span>
      </div>
    </div>
  );
}

export default NoteCard;
