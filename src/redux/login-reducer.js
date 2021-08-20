const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_AUTH = 'SET_IS_AUTH'
const LOGOUT = 'LOGOUT'

const initialState = {
    login: null,
    password: null,
    isAuth: false
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA :
            return {
                ...state,
               ...action.payload
            }
        case SET_IS_AUTH : 
            return {
                ...state,
                isAuth: action.payload
            }

        default: 
            return state
    }
}


export const setUserData = (login, password, isAuth) => ({
    type: SET_USER_DATA,
    payload: {login, password, isAuth}

})

export const setIsAuth = (isAuth) => ({
    type: SET_IS_AUTH,
    payload: isAuth
})

export const logout = (isAuth) => ({
    type: LOGOUT,
    payload: isAuth
})


