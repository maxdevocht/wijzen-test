import { useEffect, useState } from "react";
import { NewTodoForm } from "../components/NewTodoForm";
import { TodoList } from "../components/TodoList";

export default function TodoPage() {
  const [players, setPlayers] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(players));
  }, [players]);

  function addPlayer(title) {
    setPlayers((currentPlayers) => {
      return [...currentPlayers, { id: crypto.randomUUID(), title }];
    });
  }

  function deletePlayer(id) {
    setPlayers((currentPlayers) => {
      return currentPlayers.filter((player) => player.id !== id);
    });
  }

  return (
    <section className="container bg-blue-700 w-full h-screen flex flex-col items-center justify-between">
      <div className="img" />
      <div className="flex items-center flex-col mt-10">
        <h1 className="h2 text-white text-center">Voeg spelers toe</h1>
        <p className="h2 text-white">8/8</p>
      </div>

      <div className="w-full pb-2 flex justify-start mt-auto">
        <TodoList players={players} deletePlayer={deletePlayer} />
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-2">
        <NewTodoForm onSubmit={addPlayer} />
        <a href="#" className="button bg-white text-blue-700">
          Start het spel
        </a>
      </div>
    </section>
  );
}
