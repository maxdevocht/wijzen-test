import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2">
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        placeholder="Naam speler"
        id="item"
        className="w-4/5 text-white placeholder-white bg-blue-700 border-white border-4 p-3 rounded-lg shadow-2xl shadow-inner text-4xl font-wijzen text-center"
      />

      <button className="w-1/5 text-blue-700 bg-white p-3 rounded-lg shadow-2xl shadow-inner text-5xl font-wijzen text-center">
        +
      </button>
    </form>
  );
}
