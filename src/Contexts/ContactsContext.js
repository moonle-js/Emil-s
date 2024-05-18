import { createContext, useReducer } from "react";
import {v4 as uuid, v4} from 'uuid'

export const contactsContext = createContext();


var initialStates = {
    
}

var reducer = (state, action) => {
    var aydi = `${v4()}`
    var comment = {[aydi]: {...action}}
    console.log(comment)
    return {...state, ...comment}
}

export default function ContactsContext({children}){

    var [state, dispatch] = useReducer(reducer, initialStates)

    return(
        <>
            <contactsContext.Provider value={[state, dispatch]}>
                {children}
            </contactsContext.Provider>
        </>
    )
}