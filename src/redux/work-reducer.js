const SET_MESSAGES = 'SET_MESSAGES';
const ADD_MESSAGE = 'ADD_MESSAGE';
const DELETE_MESSAGE ='DELETE_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'


const initialState = {
    messages: [
        {id: Math.floor(Math.random() * 10000), message: 'My first message'},
        {id: Math.floor(Math.random() * 10000), message: 'This is dream city'},
        {id: Math.floor(Math.random() * 10000), message: 'My My My Oh my'}

    ]
}


export const workReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_MESSAGES : 
            return {
                ...state,
                messages: action.payload
            }

        case ADD_MESSAGE : 
            return {
                ...state,
                messages: [action.payload, ...state.messages]
            }

        case DELETE_MESSAGE : 
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.payload)
            }

        case UPDATE_MESSAGE : 
            return {
                ...state,
                messages: action.payload
            }

        default:
            return state
    }
}

export const setMessagesAC = (messages) => ({
    type: SET_MESSAGES,
    payload: messages
})

export const addMessageAC = (message) => ({
    type: ADD_MESSAGE,
    payload: message
})

export const deleteMessageAC = (id) => ({
    type: DELETE_MESSAGE,
    payload: id
})

export const updateMessageAC = (array) => ({
    type: UPDATE_MESSAGE,
    payload: array
})