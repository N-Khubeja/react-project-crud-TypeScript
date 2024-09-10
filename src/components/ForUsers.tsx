import { useRef } from "react"
import { forusersprops } from "../interfaces/fetch.interface"


const ForUsers: React.FC<forusersprops> = ({action,deffirstname,deflastname})  => {
    const firstnameref = useRef<HTMLInputElement>(null)
    const lastnameref = useRef<HTMLInputElement>(null)

    const onsubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(firstnameref.current&& lastnameref.current){
            action(firstnameref.current.value,lastnameref.current.value)
        }
        

    }

    return(
        <form onSubmit={onsubmit}>
            <input type="text" placeholder="firstname" ref={firstnameref} defaultValue={deffirstname} />
            <input type="text" placeholder="lastname" ref={lastnameref} defaultValue={deflastname}/>
            <button type="submit">submit</button>
        </form>
    )
}

export default ForUsers