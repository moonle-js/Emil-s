import { useContext, useRef, useState } from "react"
import { credentialsContext } from "../Contexts/CredentialsContext"
import style from "./signUp.module.css"
import { useNavigate } from "react-router-dom"
import Alert from "./Alert"

export default function SignUp(){

    const [statecontext, dispatchContext] = useContext(credentialsContext)
    const [showalert, setshowalert] = useState(false)

    var email = useRef()
    var password = useRef()

    var navigateTo = useNavigate()

    return(
        <>
            <main>
                <section className={style.signUpSection}>
                    <h1>Log In</h1>
                    <form>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input ref={email} type="text" id="email" placeholder="example@gmail.com"></input>
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input ref={password} type="password" id="password" placeholder="Password"></input>
                        </div>

                        <button onClick={(event) =>{
                            event.preventDefault()
                            if(email.current.value == statecontext.email && password.current.value == statecontext.password){
                                navigateTo('/mainPage')
                            }else{
                                setshowalert(true)
                                setTimeout(() => setshowalert(false), 2000)
                            }
                        }}>Login</button>
                    </form>
                </section>

                {showalert? <Alert>Wrong Credentials</Alert> : ""}

            </main>

        </>
    )
}