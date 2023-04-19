

import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { addToDo } from '../../action/action';

const CustomInput = styled.input`
    width: 100%;
    height: 50px;
    outline: none;
    border: 1px solid aqua;
    border-radius: 10px;
    font-size: 24px;
`

const CustomContainer = styled.div`
    position: relative;
`

const CustomButton = styled.button`
    height: 30px;
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid aqua;
    position: absolute;
    right: 8px;
    top: 12px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function AddTodo() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        const { value } = inputRef.current;

        if (value.length < 2) {
            alert("Please enter more than 2 letters");
        } else {
            // I want to save inside my redux store
            const data = {
                text: value,
                completed: false,
                id: uuidv4()
            }

            dispatch(addToDo(data));
            // Clear the input box
            inputRef.current.value = "";
        }
    }

    return (
        <CustomContainer>
            <CustomInput ref={inputRef} type="text" placeholder="Enter your task here!" />
            <CustomButton onClick={handleClick}>
                Add
            </CustomButton>
        </CustomContainer>
    )
}
