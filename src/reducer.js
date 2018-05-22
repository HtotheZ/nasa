//import { combineReducers } from 'redux';
// import { addNumber } from "./actions.js"

export const reducer = (state = {
    number: 10,
    startDate:"",
    endDate: "",
    arr: []
}, action) => {
    switch (action.type) {
        case "NUMBER":
            state = {
                ...state,
                number: state.number + action.payload
            };
            break;
        case "START_DATE":
            state = {
                ...state,
                startDate: action.payload
            };
            break;
        case "END_DATE":
            state = {
                ...state,
                endDate: action.payload
            };
            break;
        case "ARR":
            state = {
                ...state,
                arr: action.payload
            };
            break;
        default:
            break;
    }
    return state;
}