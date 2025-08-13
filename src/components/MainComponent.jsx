import React, { useContext, useState, useEffect } from "react";
import style from "../styles/main.module.css";
import { StoreContext } from "../context/Store";
import { toast, Toaster } from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
import GroupList from "./GroupList";
import NotesList from "./NotesList";
import NoteForm from "./NoteForm";
import EmptyState from "./EmptyState";
import CreateGroup from "./CreateGroup";

function MainComponent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const { group, note, setNote } = useContext(StoreContext);

  const [showSection2, setShowSection2] = useState(false);

  useEffect(() => {
    if (selectedGroup && window.innerWidth <= 768) {
      setShowSection2(true);
    }
  }, [selectedGroup]);

 const handleBackClick = () => {
    setShowSection2(false);
    setSelectedGroup(null); 
  };

  function getInitials(name) {
    const words = name.trim().split(/\s+/);
    if (words.length === 1) return words[0][0].toUpperCase();
    return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  }

  return (
    <div
      className={`${style.container} ${showSection2 ? style.showSection2 : ""}`}
    >
      <Toaster position="top-right" reverseOrder={false} />

     <GroupList
        groups={group}
        selectedGroup={selectedGroup}
        onSelectGroup={setSelectedGroup}
        onAddGroup={() => setShowModal(true)}
      />

     <div className={style.section2}>
        {selectedGroup ? (
          <>
            <div className={style.heading}>
              <ArrowLeft size={32} strokeWidth={4} color="white" className={style.backArrow} onClick={handleBackClick}/>
              
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: selectedGroup.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                {getInitials(selectedGroup.name)}
              </span>
              <h1>{selectedGroup.name}</h1>
            </div>

            <NotesList notes={note} selectedGroup={selectedGroup} />
            <NoteForm
              selectedGroup={selectedGroup}
              setNote={setNote}
              toast={toast}
            />
          </>
        ) : (
          <EmptyState />
        )}
      </div>

      {showModal && <CreateGroup onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default MainComponent;
