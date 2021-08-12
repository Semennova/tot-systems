const SET_FLOOD_MESSAGES = 'SET_FLOOD_MESSAGES'
const ADD_FLOOD_MESSAGE = 'ADD_FLOOD_MESSAGE'
const DELETE_FLOOD_MESSAGE = 'DELETE_FLOOD_MESSAGE'
const UPDATE_FLOOD_MESSAGE = 'UPDATE_FLOOD_MESSAGE'

const initialState = {
    messages: [
        {id: Math.floor(Math.random() * 10000), message: 'Flood message'},
        {id: Math.floor(Math.random() * 10000), message: 'I can type anything I want'},
        {id: Math.floor(Math.random() * 10000), message: 'Did you work out this morning??'}
    ]
   
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

export const setFloodMessagesAC = (messages) => ({
    type: SET_FLOOD_MESSAGES,
    payload: messages
})

export const addFloodMessageAC = (message) => ({
    type: ADD_FLOOD_MESSAGE,
    payload: message
})

export const deleteFloodMessageAC = (id) => ({
    type: DELETE_FLOOD_MESSAGE,
    payload: id
})

export const upadateMessageAC = (array) => ({
    type: UPDATE_FLOOD_MESSAGE,
    payload: array
})