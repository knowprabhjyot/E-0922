import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, Fab, IconButton, TextField, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
    const [openDrawer, setOpenDrawer] = useState(false);
    const [isCompleteView, setIsCompleteView] = useState(false);

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


    const markTaskComplete = (id) => {


        // So here we are updating todos if it was completed!
        const modifiedTodosList = todosList.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = true;
            }

            return todo;
        })

        setTodosList(modifiedTodosList);
        localStorage.setItem('todoList', JSON.stringify(modifiedTodosList));
    }


    const deleteTask = (id) => {
        const modifiedTodosList = todosList.filter((todo) => {
            if (todo.id !== id) {
                return true;
            }
        })
        setTodosList(modifiedTodosList);
        localStorage.setItem('todoList', JSON.stringify(modifiedTodosList));
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

    // const showCompletedTasks = () => {
    //     setIsCompleteView(true);

    //     return todosList.filter((todo) => todo.isCompleted).map((todoItem) => {
    //         return <CustomCard deleteTask={(id) => deleteTask(id)} setComplete={(id) => markTaskComplete(id)} todo={todoItem} />
    //     })
    // }

    const showAllTasks = () => {
        // setIsCompleteView(false);
        return todosList.map((todoItem) => {
            return <CustomCard deleteTask={(id) => deleteTask(id)} setComplete={(id) => markTaskComplete(id)} todo={todoItem} />
        })
    }

    // const showTasks = () => {
    //     if (isCompleteView) {
    //          // Show complete tasks
    //          return showCompletedTasks();
    //     } else {
    //         // show All tasks
    //         return showAllTasks();
    //     }
    // }

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
                        onClick={() => setOpenDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Hello {user.userName}, Welcome to Todo
                    </Typography>
                    {/* <CustomButton /> */}
                </Toolbar>
            </AppBar>

            <Drawer
                open={openDrawer}
                // anchor={anchor}
                // open={state[anchor]}
                onClose={() => setOpenDialog(false)}
            >
                <CustomButton handleClick={showAllTasks} title="All Tasks" />
                {/* <CustomButton handleClick={showCompletedTasks} title="Completed Tasks!" /> */}
            </Drawer>

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
                 { showAllTasks ()  }
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
