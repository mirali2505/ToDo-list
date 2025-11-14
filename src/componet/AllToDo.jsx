import { useContext, useEffect, useState } from "react";
import ModeContext from "../context/Mode_context";

export const AllToDo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isDarkMode } = useContext(ModeContext);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data.todos);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className={`${!isDarkMode ? "todo-dark" : "todo-light"}`}>
      <h1 style={{ textAlign: "center", padding: "2%" }}>All ToDo</h1>

      {posts.map((post) => (
        <div
          className={`${!isDarkMode ? "allToDo-dark" : "allToDo-light"}`}
          key={post.id}
        >
          <div>{post.todo}</div>
          <div style={{ backgroundColor: post.completed ? "blue" : "red" }}>
            {post.completed ? "done" : "pending"}
          </div>
        </div>
      ))}
    </div>
  );
};
