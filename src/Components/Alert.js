import style from "./alert.module.css"

export default function Alert({children}){
    return(
        <>
            <section className={style.alertSectino} id="alertSectino">
                <div>
                    <span>{children}</span>
                </div>
            </section>
        </>
    )
}