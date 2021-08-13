const SET_FLOOD_MESSAGES = 'SET_FLOOD_MESSAGES'
const ADD_FLOOD_MESSAGE = 'ADD_FLOOD_MESSAGE'
const DELETE_FLOOD_MESSAGE = 'DELETE_FLOOD_MESSAGE'
const UPDATE_FLOOD_MESSAGE = 'UPDATE_FLOOD_MESSAGE'

const initialState = {
    messages: []
   
}

export const floodReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_FLOOD_MESSAGES :
            return {
                ...state,
                messages: action.payload
            }
        case ADD_FLOOD_MESSAGE :
            return {
                ...state,
                messages: [action.payload, ...state.messages]
            }
        case DELETE_FLOOD_MESSAGE : 
            return {
                ...state,
                messages: state.messages.filter(m => action.payload !== m.id)
            }
        case UPDATE_FLOOD_MESSAGE : 
            return {
                ...state,
                messages: action.payload
            }
        default:
            return state
    }
}

export const setFloodMessages = (messages) => ({
    type: SET_FLOOD_MESSAGES,
    payload: messages
})

export const addFloodMessage = (message) => ({
    type: ADD_FLOOD_MESSAGE,
    payload: message
})

export const deleteFloodMessage = (id) => ({
    type: DELETE_FLOOD_MESSAGE,
    payload: id
})

export const upadateFloodMessage = (array) => ({
    type: UPDATE_FLOOD_MESSAGE,
    payload: array
})