export function TodoItem({ id, title, deletePlayer }) {
  return (
    <li>
      <button
        onClick={() => deletePlayer(id)}
        className="text-white border-white border placeholder-white bg-lightBlue p-3 rounded-lg shadow-2xl shadow-inner text-3xl font-wijzen text-center"
      >
        {title}
      </button>
    </li>
  );
}
