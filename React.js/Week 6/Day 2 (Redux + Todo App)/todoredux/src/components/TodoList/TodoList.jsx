import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from '../TodoListItem/TodoListItem';

export default function TodoList() {
    // How I can fetch data from the store ?
    // useSelector ?
    const todos = useSelector(state => state.todos);

    return (
        todos.map((todoData, index) => <TodoListItem {...todoData} key={index} />)
    )
}
