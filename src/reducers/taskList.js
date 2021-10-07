import { FETCH_DATA, CREATE, DELETE, DELETE_TASK, CREATE_TASK, FETCH_USERS } from "../constants/actionType"

const State = (state = { isLoading: true, data: [], users: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };

        case FETCH_DATA:
            return { ...state, data: action.payload };

        case FETCH_USERS:
            return { ...state, users: action.payload };

        case DELETE_TASK:
            return state.filter((s) => s._id !== action.payload);

        case CREATE_TASK:
            return { ...state, data: [...state.data, action.payload] };
        default:
            return state;
    }
};

export default State