import './App.css'
import AddTodo from './components/AddToDo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {

  // Create a todo (DONE)
  // See the list of todos
  // Updating a todo
  // Deleting a todo
  // Marking a todo as complete

  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
