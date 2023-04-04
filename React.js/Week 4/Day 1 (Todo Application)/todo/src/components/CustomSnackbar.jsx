import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export default function CustomSnackbar(props) {
    return (
        <Snackbar open={props.openAlert} autoHideDuration={4000} onClose={props.handleClose} anchorOrigin={props.position}>
            <Alert onClose={props.handleClose} severity={props.severity} sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}
