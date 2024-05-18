import { Outlet } from "react-router";
import CredentialsContext from "../Contexts/CredentialsContext";
import ContactsContext from "../Contexts/ContactsContext";

export default function Default(){
    return(
        <>
            <CredentialsContext>
                <ContactsContext>
                    <Outlet></Outlet>
                </ContactsContext>
            </CredentialsContext>
            
        </>
    )
}