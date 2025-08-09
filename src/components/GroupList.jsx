import React from "react";
import style from "../styles/main.module.css";

function getInitials(name) {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0][0].toUpperCase();
  return words[0][0].toUpperCase() + words[1][0].toUpperCase();
}

function GroupList({ groups, selectedGroup, onSelectGroup, onAddGroup }) {
  return (
    <div className={style.section1}>
      <h1>Pocket Notes</h1>

      {groups.map((value, index) => (
        <div
          key={index}
          className={`${style.list} ${
            selectedGroup?.name === value.name ? style.active : ""
          }`}
          onClick={() => onSelectGroup(value)}
        >
          <span
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: value.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              color: "#fff",
              fontSize: "14px",
              flexShrink: 0,
            }}
          >
            {getInitials(value.name)}
          </span>
          <h3 style={{ margin: 0 }}>{value.name}</h3>
        </div>
      ))}

      <img src="plus.png" alt="Add Group" onClick={onAddGroup} />
    </div>
  );
}

export default GroupList;
