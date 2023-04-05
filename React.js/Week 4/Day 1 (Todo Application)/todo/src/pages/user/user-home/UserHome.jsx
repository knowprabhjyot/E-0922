import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Fab, IconButton, TextField, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CustomButton from '../../../components/CustomButton';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import CustomCard from '../../../components/CustomCard';
import { v4 as uuidv4 } from 'uuid';

export default function UserHome() {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");

    const [todosList, setTodosList] = useState([]);
    const [newTaskCreated, setNewTaskCreated] = useState({});

    useEffect(() => {
        const currentuser = JSON.parse(localStorage.getItem('current-user'));


        if (!currentuser) {
            navigate('/user/login');
        } else {
            setUser(currentuser);
        }
    }, []);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todoList'));

        if (todos) {
            setTodosList(todos);
        }

    }, [newTaskCreated]);


    const markTaskComplete = () => {
        alert("Fired");
    }


    const handleClose = () => {
        setOpenDialog(false);
    }

    const handleSubmitTodo = () => {
        const newTodo = {
            title,
            description,
            id: uuidv4(),
            isCompleted: false,
            priority
        }

        setNewTaskCreated(newTodo);
        const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        todoList.push(newTodo);

        localStorage.setItem('todoList', JSON.stringify(todoList));

        setTitle("");
        setDescription("");

        handleClose();
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Hello {user.userName}, Welcome to Todo
                    </Typography>
                    {/* <CustomButton /> */}
                </Toolbar>
            </AppBar>

            <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle>Todo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the task you want to do!
                    </DialogContentText>
                    {/* <Divider /> */}
                    <Box marginTop="8px" display="flex" flexDirection="column" gap="20px">
                        <TextField value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined" label="Title" type="text" placeholder="Enter Todo Title" />
                        <TextField value={description} onChange={(e) => setDescription(e.target.value)} variant="outlined" label="Description" type="text" placeholder="Enter Todo Description" />
                    </Box>
                </DialogContent>
                <Box margin="auto">
                    <ToggleButtonGroup
                        color="primary"
                        value={priority}
                        exclusive
                        onChange={(e, prioritySelected) => setPriority(prioritySelected)}
                        aria-label="Platform"
                    >
                        <ToggleButton size='small' value="low">Low</ToggleButton>
                        <ToggleButton size='small' value="medium">Medium</ToggleButton>
                        <ToggleButton size='small' value="high">High</ToggleButton>

                    </ToggleButtonGroup>
                </Box>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmitTodo}>Submit</Button>
                </DialogActions>
            </Dialog>

            {/* TODOS --> ARRAY[TODO] */}



            {
                todosList.length === 0 ? <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Typography>No Tasks added yet</Typography>
                </Box> : <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="8px" margin="20px">
                    {
                        todosList.map((todoItem) => {
                            return <CustomCard setComplete={markTaskComplete} todo={todoItem} />
                        })
                    }
                </Box>
            }



            <Box position="fixed" bottom="30px" right="30px">
                <Fab onClick={() => setOpenDialog(true)} size="small" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Box>
        </div>
    )
}
