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

    // Application deployed to - https://tododeploy.vercel.app/
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

        const modifiedAllTodos =  todosList.map((todoItem) => {
            if (todoItem.userId === user.id) {
                let modifiedTodos = todoItem.todos.map((todoOfCurrentUser) => {
                    if (todoOfCurrentUser.id === id) {
                        todoOfCurrentUser.isCompleted = true;
                    }

                    return todoItem;
                })

                todoItem = modifiedTodos;
            }

            return todoItem;
        });

        setTodosList(modifiedAllTodos[0]);
        localStorage.setItem('todoList', JSON.stringify(modifiedAllTodos[0]));
    }


    const deleteTask = (id) => {
        const modifiedAllTodos =  todosList.map((todoItem) => {
            if (todoItem.userId === user.id) {
                let modifiedTodos = todoItem.todos.filter((todoOfCurrentUser) => {
                    if (todoOfCurrentUser.id !== id) {
                        return true
                    }
                })

                todoItem.todos = modifiedTodos;
            }

            return todoItem;
        });
        setTodosList(modifiedAllTodos);
        localStorage.setItem('todoList', JSON.stringify(modifiedAllTodos));
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
        let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

        // user.id

        console.log(user.id, "USER ID");

        if (todoList.length === 0 || !todoList.find((todoObject) => { return todoObject.userId === user.id })) {
            todoList.push({
                userId: user.id,
                todos: [newTodo]
            })
        } else {
            // if the todolist existed
            // todoList = [{ userId: 'xyz', todos: [] }, { userId: 'abc', todos: [] }]
            // eslint-disable-next-line array-callback-return
            todoList = todoList.map((todoObject) => {
                // When the todoList is greater than 0
                // If the user was already there!
                if (todoObject.userId === user.id) {
                    todoObject.todos = [...todoObject.todos, ...[newTodo]]
                }

                return todoObject;
            })


        }

        // todoList = [{ title: value, description, priority}, { title: value, description, priority} , { title: value, description, priority}]

        // todoList = [{ userId: 'xyz', todos: [] }, { userId: 'abc', todos: [] }]


        // todoList.push(newTodo);

        localStorage.setItem('todoList', JSON.stringify(todoList));

        setTitle("");
        setDescription("");

        handleClose();
    }

    const showCompletedTasks = () => {
        let todoItem = todosList.filter((todo) => todo.userId === user.id)[0];
        let todos = todoItem.todos.filter(todo => todo.isCompleted);

        return todos.map((todoItem) => {
            return <CustomCard key={todoItem.id} deleteTask={(id) => deleteTask(id)} setComplete={(id) => markTaskComplete(id)} todo={todoItem} />
        }) 
    }

    const showAllTasks = () => {
        let todoItem = todosList.filter((todo) => todo.userId === user.id)[0];
        let todos = todoItem.todos.filter(todo => !todo.isCompleted);

        return todos.map((todoItem) => {
            return <CustomCard key={todoItem.id} deleteTask={(id) => deleteTask(id)} setComplete={(id) => markTaskComplete(id)} todo={todoItem} />
        })
    }

    const logoutUser = () => {
        localStorage.removeItem('current-user');
        navigate('/user/login');
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                        <Box display="flex">
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
                        </Box>
                        <CustomButton handleClick={logoutUser} color="secondary" variant="contained" title="logout" />
                    </Box>
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
                </Box> : <Box >
                    <Typography variant='h4'>Pending Tasks</Typography>
                    <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="8px" margin="20px">
                        {showAllTasks()}
                    </Box>
                    <Divider />
                    <Typography variant='h4'>Completed Tasks</Typography>

                    <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="8px" margin="20px">
                        {showCompletedTasks()}
                    </Box>
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



// ASSIGNMENT FOR WEEK 4
// You have to design the same FLow for Admin 
// ADmin Log in
// Admin Signup
// Admin Dashboard ---> List of users
// Just like Todos you should be able delete them or create them (NOTE YOU HAVE TO TRY TO USE EXISTING COMPONENTS)


// CONTEXT API TODAY AND TOMORROW!

// TODAY A BASIC APPLICATION

// TOMORROW WE WILL TRY TO MAKE A PORTFOLIO WEBSITE WHERE WE WILL TRY TO HAVE THE THEME