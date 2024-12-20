import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  // Props drilling - All the props here should be passed all through from the App > SelectedProject > Tasks.
  return (<section>
    <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks</h2>
    {/* New Task section */}
    <NewTask onAdd={onAdd} />
    {tasks.length === 0 ? 
    (<p className="text-stone-800 my-4">This Project does not have any tasks.</p>) :
    (<ul className="p-4 mt-8 rounded-sm bg-stone-100">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between my-4">
          <span>{task.text}</span>
          <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
        </li>
      ))}
    </ul>)
    }
  </section>
  );
}