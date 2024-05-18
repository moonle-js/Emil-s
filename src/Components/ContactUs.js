import { useContext, useRef } from "react"
import style from "./mainPage.module.css"
import { contactsContext } from "../Contexts/ContactsContext"

export default function ContactUs(){
    var name = useRef()
    var comment = useRef()
    var mail = useRef()

    const [stateContext, dispatchContext] = useContext(contactsContext)

    return(
        <>
            <div className={style.outlet}>
                <div className={style.contactUsDiv}>
                    <div>
                        <label htmlFor="nameOfUser">Your name</label>
                        <input ref={name} id="nameOfUser" type="text" placeholder="Your name..."></input>
                    </div>

                    <div>
                        <label htmlFor="mailOfUser">Your Email</label>
                        <input ref={mail} id="mailOfUser" type="text" placeholder="Your e-mail..."></input>
                    </div>

                    <div className={style.commentDiv}>
                        <label htmlFor="comment">Your comment</label>
                        <input ref={comment} id="comment" type="text" placeholder="Your comment..."></input>
                    </div>

                    <button onClick={() =>{

                        let currentName = name.current.value
                        let currentComment = comment.current.value
                        let currentMail = mail.current.value


                        if(currentComment.trim() && currentMail.trim() && currentName.trim()){
                            dispatchContext({name: currentName, mail: currentMail, comment: currentComment})
                            name.current.value = ""
                            mail.current.value = ""
                            comment.current.value = ""
                        }

                    }}>Add comment</button>
                </div>
            </div>
        </>
    )
}