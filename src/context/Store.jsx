import { createContext, useState, useEffect } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [group, setGroup] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("group")) || [];
    } catch {
      return [];
    }
  });

  const [note, setNote] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("note")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(group));
  }, [group]);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  return (
    <StoreContext.Provider value={{ group, setGroup, note, setNote }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
