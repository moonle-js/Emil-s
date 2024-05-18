import { useReducer , createContext, useCallback} from "react";
export const credentialsContext = createContext();


var initialStates = {
    loginName: "",
    password: "",
    phoneNumber: "",
    email: ""
}


var reducer = (state, action) => {

        state = {...state, ...action}
        console.log(state)
        localStorage.setItem('userCredentials', JSON.stringify({...state}))
        return state
}

export default function CredentialsContext({children}){


    const [state, dispatch] = useReducer(reducer, initialStates)

    return(
        <>
            <credentialsContext.Provider value={[state, dispatch]}>
                {children}
            </credentialsContext.Provider>
        </>
    )
}