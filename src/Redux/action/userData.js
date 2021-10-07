import { START_LOADING, CREATE, FETCH_DATA, DELETE, CREATE_TASK, DELETE_TASK, FETCH_USERS } from "../../constants/actionType"
import * as api from "../api/index";

export const getTaskList = () => async (dispatch) => {
    try {
        const { data } = await api.getTaskData();
        const { tasks } = data
        dispatch({ type: FETCH_DATA, payload: tasks });
    } catch (error) {
        console.log(error);
    }
}

export const getUserList = () => async (dispatch) => {
    try {
        const { data } = await api.getUserData();
        const { users } = data
        console.log(data, "FetchedData")
        dispatch({ type: FETCH_USERS, payload: users });
    } catch (error) {
        console.log(error);
    }
}


export const createTask = (form) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createTask(form);

        dispatch({ type: CREATE_TASK, payload: data });
    } catch (error) {
        console.log(error);
    }

}

export const updateTaskList = (form) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.updateTask(form);

        // dispatch({ type: CREATE_TASK, payload: data });
    } catch (error) {
        console.log(error);
    }

}

export const deleteTaskData = (form) => async (dispatch) => {
    try {
        await api.deleteTask(form);
        dispatch({ type: DELETE_TASK, payload: form });
    } catch (error) {
        console.log(error.message);
    }
};