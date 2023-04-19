import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { completeTodo, deleteTodo, updateTodo } from '../../action/action';


const CustomCard = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    border: 1px solid aliceblue;
    gap: 20px;
    margin: 10px 0px;
    border-radius: 10px;
`;

const CustomCardTop = styled.div`
    display: flex;
    input {
        width: 20px;
        height: 20px;
    }
`;

const CustomCardText = styled.div`
    // input {

    // }
`

const CustomCardActions = styled.div`
    display: flex;
    gap: 20px;
    button {
        border: none;
        border-radius: 8px;
        padding: 8px;
    }
`

export default function TodoListItem({ id, text, completed }) {

    const dispatch = useDispatch();
    const [isEditMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(text);

    const handleCompletion = (id) => {
        dispatch(completeTodo(id));
    }

    const handleEdit = () => {
        setEditMode(true);
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        setEditText(text);
    }

    const handleUpdate = () => {
        dispatch(updateTodo({
            id,
            text: editText
        }))
        setEditMode(false);
    }

    return (
        <CustomCard >
            <CustomCardTop>
                <input type="checkbox" checked={completed} onChange={() => handleCompletion(id)} />
            </CustomCardTop>
            <CustomCardText>

                {
                    isEditMode ? (<input type="text" value={editText} onChange={(event) => setEditText(event.target.value)} />) : <b className={completed ? "completed-todo": ""}>{text}</b>
                }

            </CustomCardText>

            <CustomCardActions>
                {
                    isEditMode ? <button onClick={() => handleUpdate()}>Update</button> : <button onClick={() => handleEdit()}>Edit</button>
                }
                <button onClick={() => handleDelete(id)}>Delete</button>
            </CustomCardActions>

        </CustomCard>
    )
}
