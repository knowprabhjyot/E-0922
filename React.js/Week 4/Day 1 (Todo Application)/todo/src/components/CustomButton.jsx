import { Button, CircularProgress } from '@mui/material'
import React from 'react'

export default function CustomButton(props) {
    console.log(props.isLoading, "isloading");
    return (
        <Button color={props.color} style={props.styles} variant={props.variant} onClick={props.handleClick}>
            {props.isLoading ? <CircularProgress style={{ marginRight: 4}} size={20} color="warning" /> : null}
            {props.title}</Button>
    )
}
