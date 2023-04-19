import React from 'react'
import { useSelector } from 'react-redux'

export default function TodoList() {
    // How I can fetch data from the store ?
    // useSelector ?
    const todos = useSelector(state => state.todos);

    console.log(todos);

    return (
        <div>TodoList</div>
    )
}
