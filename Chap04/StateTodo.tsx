import { useState } from 'react';
import './StateTodo.css';

type TodoItem = {
  id: number;
  title: string;
  created: Date;
  isDone: boolean;
}

let maxId = 0;
export default function Form() {
  const [desc, setDesc] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('');
  const [todo, setTodo] = useState<TodoItem[]>([]);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setTodo([
      ...todo,
      {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false,
      },
    ]);
  };

  const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.dataset.id);
    setTodo(todo.map(item => 
      item.id === id
        ? { ...item, isDone: true }
        : item
    ));
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.dataset.id);
    setTodo(todo.filter(item => item.id !== id));
  };

  const handleSort = () => {
    const sorted = [...todo];
    sorted.sort((m, n) => {
      if (desc) {
        return n.created.getTime() - m.created.getTime();
      } else {
        return m.created.getTime() - n.created.getTime();
      }
    });
    setDesc(d => !d);
    setTodo(sorted);
  };

  return (
    <div>
      <label>
        やること：
        <input type="text" name="title"
          value={title} onChange={handleChangeTitle} />
      </label>
      <button type="button" onClick={handleClick}>追加</button>
      <button type="button" onClick={handleSort}>ソート（{desc ? '↑' : '↓'}）</button>
      <hr />
      <ul>
        {todo.map(item => (
          <li key={item.id}
            className={item.isDone ? 'done' : ''}>
            {item.title}
            <button type="button"
              onClick={handleDone} data-id={item.id}>済
            </button>
            <button type="button"
              onClick={handleRemove} data-id={item.id}>削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}