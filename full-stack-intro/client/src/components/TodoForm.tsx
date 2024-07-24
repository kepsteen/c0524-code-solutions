import { type FormEvent, useState } from 'react';
import type { UnsavedTodo } from './Todos';

type Props = {
  onSubmit: (todo: UnsavedTodo) => void;
};
export function TodoForm({ onSubmit }: Props) {
  // Note: Use a controlled form so we can easily reset it after submit.
  const [task, setTask] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newTodo = {
      task,
      isCompleted: false,
    };
    onSubmit(newTodo);
    setTask('');
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        required
        autoFocus
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="px-2 py-1 mb-2 text-gray-800 border border-gray-200"
        placeholder="What to do?"
      />
      <button
        type="submit"
        className="px-3 py-1 mb-2 text-white bg-blue-600 rounded-none whitespace-nowrap">
        Add Todo
      </button>
    </form>
  );
}
