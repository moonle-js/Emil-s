import { useCallback, useContext } from "react"
import style from "./mainPage.module.css"
import { contactsContext } from "../Contexts/ContactsContext"


export default function Contacts(){
    const [stateContext, dispatchContext] = useContext(contactsContext)

    var adlarMassiv = [];
    var commentlerMassiv = [];
    var maillerMassiv = [];


    var returnAdlar = () =>{
        for(let i in stateContext){
            adlarMassiv.push(stateContext[i].name)
            commentlerMassiv.push(stateContext[i].comment)
            maillerMassiv.push(stateContext[i].mail)
        }
        console.log("adlar", adlarMassiv)
    }

    returnAdlar()


    return(
        <>
            <div className={style.outlet}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mail</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {adlarMassiv.map((item, index) =>
                            <tr>
                                <td>{item}</td>
                                <td>
                                    {maillerMassiv[index]}
                                </td>
                                <td>
                                    {commentlerMassiv[index]}
                                </td>
                            </tr>
                        )}
                    </tbody>
                    
                </table>
            </div>
        </>
    )
}