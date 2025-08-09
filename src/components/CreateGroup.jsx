import React, { useContext, useState } from "react";
import style from "../styles/creategroup.module.css";
import { StoreContext } from "../context/Store";
import toast from "react-hot-toast";

function CreateGroup({ onClose }) {
  const { group, setGroup } = useContext(StoreContext);

  const [add, setAdd] = useState({
    name: "",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdd((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!add.name.trim()){
      toast.error("Group name should be given");
      return;
    }

    if(!add.color){
      toast.error("Color should be given");
      return;
    }

    // Trim and check for duplicates (case-insensitive)
    const nameExists = group.some(
      (g) => g.name.trim().toLowerCase() === add.name.trim().toLowerCase()
    );

    if (nameExists) {
      toast.error("Group name already exists!");
      return;
    }


    const updatedGroups = [...group, add];
    setGroup(updatedGroups);
    localStorage.setItem("group", JSON.stringify(updatedGroups));

    toast.success("Group created successfully!");
    setAdd({ name: "", color: "" });
    onClose();
  };

  return (
    <div className={style.backdrop} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className={style.createForm}>
          <h3>Create New Group</h3>
          <div className={style.name}>
            <label>Group Name</label>
            <input
              type="text"
              placeholder="Enter Group Name"
              name="name"
              value={add.name}
              onChange={handleChange}
            />
          </div>
          <div className={style.color}>
            <label>Choose Colour</label>
            <div className={style.colorOptions}>
              {["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF","#6691FF"].map(
                (c) => (
                  <span
                    key={c}
                    className={`${style.colorCircle} ${
                      add.color === c ? style.selected : ""
                    }`}
                    style={{ backgroundColor: c }}
                    onClick={() => setAdd((prev) => ({ ...prev, color: c }))}
                  ></span>
                )
              )}
            </div>
          </div>

          <div className={style.modalFooter}>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateGroup;
