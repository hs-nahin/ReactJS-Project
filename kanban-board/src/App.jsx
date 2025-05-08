import React, { useState } from "react";

const App = () => {
  const [column, setColumn] = useState({
    todo: {
      name: "To Do",
      items: [{ id: "1", content: "Project 1" }],
    },
    inProgress: {
      name: "In Progress",
      items: [
        {
          id: "1",
          content: "Project 2",
        },
      ],
    },
    done: {
      name: "Done",
      items: [
        {
          id: "1",
          content: "Project 3",
        },
      ],
    },
  });

  const [newTask, setNewTask] = useState("");
  const [activeColumn, setActiveColumn] = useState["todo"];
  const [draggedItem, setDraggedItem] = useState(null);

  return (
    <div>
      <h1 className="text-blue-600 text-7xl">hello</h1>
    </div>
  );
};

export default App;
