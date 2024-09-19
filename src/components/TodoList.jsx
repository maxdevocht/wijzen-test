import { TodoItem } from "./TodoItem";

export function TodoList({ players, deletePlayer }) {
  return (
    <ul className="flex flex-1 flex-wrap-reverse gap-2">
      {players.length === 0 && <span style={{ fontStyle: "italic" }}></span>}
      {players.map((player) => {
        return (
          <TodoItem {...player} key={player.id} deletePlayer={deletePlayer} />
        );
      })}
    </ul>
  );
}
