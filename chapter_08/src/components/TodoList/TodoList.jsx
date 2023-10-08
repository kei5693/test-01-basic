import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
	// 함수를 호출한 값 자체를 전달하면
	// 컴포넌트가 리렌더링 될때마다 readTodosFromLocalStorage 함수를 재실행한다
	// const [todos, setTodos] = useState(readTodosFromLocalStorage());

	// 콜백 함수로 감싸면 상태가 변경되어도 다시 호출되지 않는다.
	const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  // const [todos, setTodos] = useState([
  //   { id: '123', text: '장보기', status: 'active' },
  //   { id: '124', text: '공부하기', status: 'active' },
  // ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));

	// todo가 변경 될때 마다
	useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodosFromLocalStorage() {
  console.log('readTodosFromLocalStorage');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
