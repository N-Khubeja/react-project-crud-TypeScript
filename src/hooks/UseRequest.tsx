import { useState } from "react";
import { fetchprops, requesprops } from "../interfaces/fetch.interface";

const UserRequest = ({url,method}: requesprops) => {
    const key:string = 'tXGsKOlYYR0atJM7h5mJjLuzJk4TAYc5i6ujk6W9naE4F4QTnQ'
    
    const [loading,setloading] = useState<boolean>(false)
    const  sendrequest = async (body :any,custom? :any) => {
        setloading(true)
        try {
            const res = await fetch(url || custom,{
                method,
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${key}`
                },
                body:!!body && method !== 'GET' ? JSON.stringify(body) : undefined
            })
            if(!res.ok) throw new Error('cant post')
            console.log(res)
            const data = await res.json()
            setloading(false)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return {loading,sendrequest}
}

export default UserRequest