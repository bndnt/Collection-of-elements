import Task from "../Task/Task";
export default function TaskList({ tasks, onDelete }) {
  // по факту мы не используем onDelete здесь, но у нас нет выбора ибо таков механизм реакта поэтому в Task мы передаем его через TaskList

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task data={task} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
