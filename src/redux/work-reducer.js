const SET_WORK_MESSAGES = 'SET_MESSAGES'
const ADD_WORK_MESSAGE = 'ADD_WORK_MESSAGE'
const DELETE_WORK_MESSAGE ='DELETE_WORK_MESSAGE'
const UPDATE_WORK_MESSAGE = 'UPDATE_WORK_MESSAGE'


const initialState = {
    messages: []
}


export const workReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_WORK_MESSAGES : 
            return {
                ...state,
                messages: action.payload
            }

        case ADD_WORK_MESSAGE : 
            return {
                ...state,
                messages: [action.payload, ...state.messages]
            }

        case DELETE_WORK_MESSAGE : 
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.payload)
            }

        case UPDATE_WORK_MESSAGE : 
            return {
                ...state,
                messages: action.payload
            }

        default:
            return state
    }
}

export const setWorkMessages = (messages) => ({
    type: SET_WORK_MESSAGES,
    payload: messages
})

export const addWorkMessage = (message) => ({
    type: ADD_WORK_MESSAGE,
    payload: message
})

export const deleteWorkMessage = (id) => ({
    type: DELETE_WORK_MESSAGE,
    payload: id
})

export const updateWorkMessage = (array) => ({
    type: UPDATE_WORK_MESSAGE,
    payload: array
})