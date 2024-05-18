import { useContext, useEffect, useReducer, useRef, useState } from "react"
import style from "./login.module.css"
import { credentialsContext } from "../Contexts/CredentialsContext"
import { Link, useNavigate } from "react-router-dom"
import Alert from "./Alert";



export default function Login(){


    const [statecontext, dispatchContext] = useContext(credentialsContext);
    
    var navigateTo = useNavigate();


    const [showalert, setshowalert] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('userCredentials') != null || localStorage.getItem('userCredentials')){
            navigateTo('sign')
        }
    })

    var ad = useRef()
    var password = useRef()
    var repassword = useRef()
    var email = useRef()
    var phoneNumber = useRef()

    return(
        <>

            
            <main>
                <section>
                    <div>
                        <label htmlFor="#nameInput">Name:</label>
                        <input ref={ad} type="text" placeholder="Write name..." id="nameInput"></input>
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input ref={email} type="email" placeholder="Email" id="email"></input>
                    </div>

                    <div>
                        <label htmlFor="phoneNumber">Phone:</label>
                        <input ref={phoneNumber} type="number" placeholder="Phone number..." id="phoneNumber"></input>
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input ref={password} type="password" placeholder="Write password..." id="password"></input>
                    </div>

                    <div>
                        <label htmlFor="repassword">Re-Password:</label>
                        <input ref={repassword} type="password" placeholder="Re - write password..." id="repassword"></input>
                    </div>

                    

                    <button onClick={() => {
                        if(
                            password.current.value === repassword.current.value 
                            && ad.current.value.trim() 
                            && email.current.value.trim()
                            && password.current.value.trim()
                            && phoneNumber.current.value.trim()
                        ){
                            dispatchContext({
                                loginName: ad.current.value, 
                                password: password.current.value,
                                phoneNumber: phoneNumber.current.value,
                                email: email.current.value
                            })
                            navigateTo('/sign')
                        }else{
                            setshowalert(true)
                            setTimeout(() => setshowalert(false), 2000)
                        }
                    }}>
                        Register
                    </button>

                </section>

                {showalert? <Alert>Password are not the same</Alert> : ""}

            </main>
        </>
    )
}