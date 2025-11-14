import React, { useContext, useEffect, useState } from "react";
import ModeContext from "../context/Mode_context";
export const Form = ({ getFormData , formData, editId}) => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.length===0){
      return
    }
    // const data = { id: Math.random().toString(), title: title };
    getFormData(title);
    // console.log("form submited", data);
    setTitle("");
    // localStorage.setItem("data",JSON.stringify(data));
  };
  useEffect(() => {
    if (editId !== null && formData.title) {
      setTitle(formData.title);
    } else {
      setTitle("");
    }
  }, [editId, formData]);

  const { isDarkMode } = useContext(ModeContext);

  return (
    <div className={`${!isDarkMode ? "nav-dark" : "nav-light"}`}>
      <form onSubmit={handleSubmit}>
        <p></p>
        <input
          name="title"
          type="text"
          id="title"
          value={title}
          onChange={titleChangeHandler}
          placeholder="Enter Title....."
        />
        <button type="submit">{editId !== null ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};
