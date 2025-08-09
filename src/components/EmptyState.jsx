import React from "react";
import style from "../styles/main.module.css";
import { LockKeyhole } from "lucide-react";

function EmptyState() {
  return (
    <div className={style.initalContainer}>
      <div className={style.centerContent}>
        <img src="image.png" alt="Illustration" />
        <h3>Pocket Notes</h3>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
      <div className={style.lockRow}>
        <LockKeyhole size={16} />
        <h4>end-to-end encrypted</h4>
      </div>
    </div>
  );
}

export default EmptyState;
