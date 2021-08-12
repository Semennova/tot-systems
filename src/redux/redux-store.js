import { createStore, combineReducers } from "redux";
import { floodReducer } from "./flood-reducer";
import { loginReducer } from "./login-reducer";
import { workReducer } from "./work-reducer";


const reducers = combineReducers({
    work: workReducer,
    flood: floodReducer,
    auth: loginReducer

})

export let store = createStore(reducers)