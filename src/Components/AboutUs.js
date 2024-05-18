import { useContext } from "react"
import style from "./mainPage.module.css"
import { credentialsContext } from "../Contexts/CredentialsContext"


export default function AboutUs(){

    const [stateContext, dispatchContext] = useContext(credentialsContext);


    return(
        <>
        <div className={style.outlet}>
                <div className={style.aboutDiv}>
                    <p> My name is : {stateContext.loginName}</p>
                    <p> My Email is : {stateContext.email}</p>
                    <p> My phoneNumber is : {stateContext.phoneNumber}</p>
                </div>
        </div>
        </>
    )
}