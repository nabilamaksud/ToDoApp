import { useState, useEffect } from 'react';
import dltIcon from '../assets/icons8-delete.svg'
import './Todos.css'
const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(sessionStorage.getItem('todos'));
    return storedTodos || [];
  });

  useEffect(() => {
    sessionStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const addTodo = (todo) => {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    sessionStorage.removeItem('todos'); 
  };
  const clearTodos = () => {
    setTodos([])
  }

  const TodoItem = ({ todo, index, deleteTodo }) => (
    <li key={index}>
      {todo}
      <img src={dltIcon} onClick={() => deleteTodo(index) }className="dlt__btn"/>
    </li>
  )

  const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      if (!value) return
      addTodo(value)
      setValue('')
    }

    return (
      <form onSubmit={handleSubmit} className='todo__item'>
        <input
          type="text"
          className="inputTodo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add Todo..."
          />
        <button type="submit">Add Todo</button>
          <hr/>
      </form>
    )
  }

  return (
    <div className='todoHolder'>
      <h2>Todos</h2>
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 ? (
        <p>There is no more Todos Today {}</p>
      ) : (
        <ol>
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
          ))}
        </ol>
      )}
      {todos.length > 0 && (
        <button onClick={clearTodos}>Clear Todos List</button>
      )}
    </div>
  )
}

export default Todos