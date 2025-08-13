import React, { useState } from "react";
import style from "../styles/main.module.css";
import { SendHorizontal } from "lucide-react";

function NoteForm({ selectedGroup, setNote, toast }) {
  const [make, setMake] = useState({ group: selectedGroup.name, text: "" });

  const handleChange = (e) => {
    const text = e.target.value;
    setMake((prev) => ({ ...prev, text }));
  };

  const handleSend = (e) => {
    if (e) e.preventDefault();

    if (!make.text.trim()) {
      toast.error("Please enter a message before sending!");
      return;
    }

    const now = new Date();
    const newNote = {
      group: selectedGroup.name,
      text: make.text,
      time: now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      date: now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setNote((prevNotes) => [...prevNotes, newNote]);
    setMake({ ...make, text: "" });

    toast.success("Note added successfully!");
  };

  return (
    <div className={style.formContainer}>
      <form >
        <div className={style.formDiv}>
          <textarea
            placeholder="Enter your text here..."
            name="text"
            value={make.text}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && make.text.trim()) {
                e.preventDefault(); 
                handleSend();
              } else if (e.key === "Enter") {
                e.preventDefault();
                toast.error("Please enter a message before sending!");
              }
            }}
          />
          <span>
            <SendHorizontal
              size={30}
              onClick={
                make.text.trim()
                  ? handleSend
                  : () => toast.error("Please enter a message before sending!")
              }
              className={`${style.sendIcon} ${
                !make.text.trim() ? style.sendIconDisabled : ""
              }`}
            />
          </span>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
