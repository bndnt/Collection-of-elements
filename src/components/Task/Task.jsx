export default function Task({ data: { id, text }, onDelete }) {
  return (
    <div>
      <p>{text}</p>
      {/* {() => onDelete} мы делаем ссылку на функцию deleteTask, которая находиться в App.jsx,в которой и описано как мы будем удалять наш Таск  */}
      {/* id мы передаем в функию потому что удаление будет совершаться по ид */}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
