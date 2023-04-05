import { Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomButton from './CustomButton'

export default function CustomCard(props) {
    return (
        <Card style={{ backgroundColor: '#d0e0f0', position: "relative", minHeight: "200px" }}>

            <Typography fontSize={"16px"} textAlign="left" padding={"16px"}>
                Title: {props.todo.title}
            </Typography>

            <CardContent>
                <Box textAlign="left">
                    <Typography variant="h6" fontSize={"12px"} textAlign="left" color={'#646161'}>
                        Description: {props.todo.description}
                    </Typography>
                    <Chip color={props.todo.priority === 'high' ? 'error' : props.todo.priority === 'medium' ? 'warning' : 'secondary'} style={{ height: '16px', padding: '2px 4px' }} size='small' label={props.todo.priority} />
                </Box>
            </CardContent>


            <CardActions style={{ position: 'absolute', bottom: 0 }}>
                <CustomButton handleClick={props.setComplete} variant="outlined" color="success" title="Done" />
                <CustomButton variant="outlined" color="error" title="Delete" />
            </CardActions>

        </Card>
    )
}
