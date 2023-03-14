import React from 'react'
import './StyledButton.css';

export default function StyledButton(props) {
  return (
    <button onClick={props.onStyledButtonClick}>
        {props.title}
    </button>
  )
}
