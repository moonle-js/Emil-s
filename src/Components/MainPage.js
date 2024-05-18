import { Outlet} from "react-router";
import { Link } from "react-router-dom";
import style from "./mainPage.module.css"

export default function MainPage(){


    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/mainPage/'}>Main Page</Link>
                        </li>
                        <li>
                            <Link to={'/mainPage/about'}>About Us</Link>
                        </li>
                        <li>
                            <Link to={'/mainPage/contactUs'}>Contact us</Link>
                        </li>
                        <li>
                            <Link to={'/mainPage/contact'}>Contacts</Link>
                        </li>

                    </ul>
                </nav>
            </header>
            <section className={style.mainPageSection}>
                <p>
                    First Try for Real Project
                </p>

                <Outlet></Outlet>

            </section>
            
        </>
    )
}