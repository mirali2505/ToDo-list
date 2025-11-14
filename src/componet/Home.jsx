import "./Home.css";
import ModeContext from "../context/Mode_context";
import { useContext, useEffect, useState } from "react";
import { Form } from "./Form";
import Box from "./Box";
const getLocalTasks = () => {
  let tasks = localStorage.getItem("tasks");
  if (tasks) {
    return JSON.parse(tasks);
  } else {
    return [];
  }
};
export const Home = () => {
  const { isDarkMode } = useContext(ModeContext);

  const [allData, setAllData] = useState(getLocalTasks);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(getLocalTasks);

  

  const getFormData = (noteData) => {
    console.log(noteData);

    if (editId !== null) {
      const updatedList = allData.map((item) =>
        item.id === editId ? { ...item, ...noteData } : item
      );
      setAllData(updatedList);
      setEditId(null);
    } else {
      // const newNote = { id: Date.now(), ...noteData };
      // setAllData([...allData,newNote]);
      setAllData((prev) => [
        ...prev,
        { id: Math.random().toString(), title: noteData },
      ]);
      localStorage.setItem("data", JSON.stringify(allData)); // ✅ Save to localStorage
    }

    setFormData({ title: "" });
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(allData));
  }, [allData]);
  useEffect(() => {
    console.log(allData);
  }, [allData]);

  const deleteHandler = (id) => {
    const filterData = allData.filter((note) => note.id !== id);
    setAllData(filterData);
    localStorage.setItem("data", JSON.stringify(filterData)); // ✅ Keep localStorage updated
  };

  const editHandler = (id) => {
    const itemToEdit = allData.find((item) => item.id === id);
    if (itemToEdit) {
      setEditId(id);
      setFormData({ title: itemToEdit.title });
    }
  };

  useEffect(() => {
    console.log("All tasks:", allData);
  }, [allData]);

  return (
    <div className={`${!isDarkMode ? "nav-dark" : "nav-light"}`}>
      <Form
        getFormData={getFormData}
        formData={formData}
        setFormData={setFormData}
        editId={editId}
      />

      <Box
        taskList={allData}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};
