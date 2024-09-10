import { useCallback, useEffect, useState } from "react"
import { fetchprops, FetchResponse } from "../interfaces/fetch.interface"


const UseFetch = ({url,method} : fetchprops) => {
    const key:string = 'tXGsKOlYYR0atJM7h5mJjLuzJk4TAYc5i6ujk6W9naE4F4QTnQ'
    const [error,seterror] = useState(null)
    const [loading,setloading] = useState(false)
    const [response,setresponse] = useState<any | null>(null)

    const onfetch = useCallback(() => {
        setloading(true)
        fetch(url,{
            method,
            headers:{
                 "Content-Type": "application/json",
                 "Authorization": `Bearer ${key}`
            }
        })
        .then((res) => {
            if(!res.ok) throw new Error('cant get users')
            return res.json()
        })
        .then((data) => setresponse(data))
        .catch((error) => seterror(error))
        .finally(() => setloading(false))

        return () => {
            seterror(null)
            setloading(false)
            setresponse(null)
        }
    },[url,method])

    useEffect(() => {
        onfetch()
    },[onfetch])

    return {response,error,loading,resend:onfetch}
}

export default UseFetch