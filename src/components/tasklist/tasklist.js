import React, { useRef } from 'react'
import { Addbutton, Inputfield, SearchBar, TasklistPage, TaskListTop } from './tasklistStyles'
import SearchIcon from '@mui/icons-material/Search';
import Board from 'react-trello'
import './tasklist.css'
import { TaskListBottom } from '../navbar/navbarStyles';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { createTask, deleteTaskData, getTaskList, getUserList, updateTaskList } from '../../Redux/action/userData';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Moment from 'moment';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Tasklist() {

    const dispatch = useDispatch();
    const [highPriority, sethighPriority] = useState([])
    const [mediumPriority, setmediumPriority] = useState([])
    const [normalPriority, setnormalPriority] = useState([])
    const valueDate = useRef();
    const [priority, setPriority] = React.useState('');
    const message = useRef(null);
    const [reload, setReload] = useState(false);
    const [Process, setProcess] = useState(true);
    const [cardID, setcardID] = useState()
    const [assigned, setAssigned] = useState()

    useEffect(() => {
        dispatch(getTaskList())
        dispatch(getUserList())
    }, [])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setProcess(true)
        setOpen(true);
        setAssigned();
        setPriority();

    };

    const handleClose = () => {
        setOpen(false);
    };

    const TaskList = useSelector(state => state.taskList.data)

    const UserList = useSelector(state => state.taskList.users)
    console.log(UserList)

    useEffect(() => {
        if (TaskList.length !== 0) {
            TaskList.map((task) => {
                if (task.priority === '3') {
                    const taskData = { id: task.id, title: task.message, description: task.assigned_name }
                    sethighPriority((prevState) => { return [taskData, ...prevState] })
                }
                else if (task.priority === '2') {
                    const taskData = { id: task.id, title: task.message, description: task.assigned_name }
                    setmediumPriority((prevState) => { return [taskData, ...prevState] })
                }
                else if (task.priority === '1') {
                    const taskData = { id: task.id, title: task.message, description: task.assigned_name }
                    setnormalPriority((prevState) => { return [taskData, ...prevState] })
                }
            })
        }
    }, [TaskList.length])


    const data = {
        lanes: [
            {
                id: '3',
                title: 'High Priority',
                cards: highPriority
            },
            {
                id: '2',
                title: 'Midium Priority',
                cards: mediumPriority
            },
            {
                id: '1',
                title: 'Normal Tasks',
                cards: normalPriority
            }

        ]
    }


    const handleCardDelete = (id) => {

        let form = new FormData()

        form.append("taskid", id)

        dispatch(deleteTaskData(form))
    }

    const handlePriority = (event) => {
        setPriority(event.target.value);
    };

    const handleAssign = (event) => {
        setAssigned(event.target.value)
    }

    const handleSave = () => {

        let form = new FormData()

        form.append("message", message.current)
        form.append("due_date", valueDate.current)
        form.append("priority", priority)
        form.append("assigned_to", assigned)

        if (Process === true) {
            dispatch(createTask(form))
        }
        else {
            form.append("taskid", cardID)
            dispatch(updateTaskList(form))
        }

        setOpen(false);
        setReload(!reload)
        sethighPriority([])
        setnormalPriority([])
        setmediumPriority([])

        setTimeout(() => {
            window.location.reload();
        }, 1200);

    }

    const handleChangePriority = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
        let form = new FormData()

        form.append("taskid", cardId)
        form.append("message", cardDetails.title)
        form.append("priority", targetLaneId)

        dispatch(updateTaskList(form))
        console.log(cardId, sourceLaneId, targetLaneId, position)

    }


    const SetDatatoUpdate = (task) => {
        console.log(task)
        message.current = task.message
        valueDate.current = task.due_date
        setPriority(task.priority)
        setAssigned(task.assigned_name)
        setOpen(true)


    }

    const handleOnCardClick = (id) => {
        setProcess(false)
        setcardID(id)
        TaskList.filter(task => task.id === id)
            .map((task) => (
                SetDatatoUpdate(task)
            ))

    }

    return (
        <>
            <TasklistPage>
                <TaskListTop>
                    <SearchBar><Inputfield placeholder="Search" /><SearchIcon sx={{ fontSize: 20 }} /></SearchBar>
                    <Addbutton onClick={handleClickOpen}>Add New Task </Addbutton>
                </TaskListTop>
                <TaskListBottom>
                    <Board style={{ backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px', height: 'fit-content', padding: '30px' }}
                        data={data}
                        onCardDelete={(e) => handleCardDelete(e)}
                        handleDragEnd={(cardId, sourceLaneId, targetLaneId, position, cardDetails) => handleChangePriority(cardId, sourceLaneId, targetLaneId, position, cardDetails)}
                        onCardClick={(cardId) => handleOnCardClick(cardId)}
                    />
                </TaskListBottom>
            </TasklistPage>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle> {Process ? (<>Add New Task </>) : (<> UpdateTask </>)}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <FormControl style={{ marginBottom: '10px' }} fullWidth>
                                <TextField style={{ width: '100%' }} id="demo-helper-text-misaligned-no-helper" label={"Message"} defaultValue={`${message.current}`} onChange={(e) => message.current = e.target.value} />

                            </FormControl>
                            <FormControl style={{ marginBottom: '10px' }} fullWidth>
                                <TextField
                                    style={{ width: '100%' }}
                                    id="datetime-local"
                                    label="Due Date"
                                    type="datetime-local"
                                    value={valueDate.current}
                                    onChange={(e) => valueDate.current = e.target.value}
                                    sx={{ width: 250 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>
                            <FormControl style={{ marginBottom: '10px' }} fullWidth>
                                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={priority}
                                    label="Priority"
                                    onChange={handlePriority}
                                >
                                    <MenuItem value={1}>Normal</MenuItem>
                                    <MenuItem value={2}>Medium</MenuItem>
                                    <MenuItem value={3}>High</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-se">Users</InputLabel>
                                <Select
                                    labelId="demo-simple-se"
                                    id="demo-simple"
                                    value={assigned}
                                    label="Users"
                                    onChange={handleAssign}
                                >
                                    {
                                        UserList.map((user) => (
                                            <MenuItem value={user.id}>{user.name}</MenuItem>
                                        ))
                                    }
                                    {/* <MenuItem value={1}>Normal</MenuItem>
                                    <MenuItem value={2}>Medium</MenuItem>
                                    <MenuItem value={3}>High</MenuItem> */}

                                </Select>
                            </FormControl>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>

    )
}

export default Tasklist

