import { Link } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import { fetchuser } from "../interfaces/fetch.interface"
import UserRequest from "../hooks/UseRequest"

const MainPage :React.FC<{}> = () => {
    const key:string = 'tXGsKOlYYR0atJM7h5mJjLuzJk4TAYc5i6ujk6W9naE4F4QTnQ'
    const {error,loading,response,resend} = UseFetch({url:'/api/v1/users',method:'GET'})
    const {sendrequest} = UserRequest({method:'DELETE'})
    const users = response?.items.map((item: fetchuser) => {
        return {
            firstname:item.firstname,
            lastname:item.lastname,
            id:item._uuid
        }
    }) || []

    const ondelete = (id:string) => {
        console.log(id)
        sendrequest({},`/api/v1/users/${id}`)
        .then(() => resend())
    }
    if(error) return <p>...{error}</p>
    if(loading) return <p>...loading</p>
    return(
        <div>
            <Link to={'/create'}>create</Link>
            {users.map((user:any) => 
            <div key={user.id} className="user">
                <h1>FIRSTNAME:{user.firstname}</h1>
                <h1>LASTNAME:{user.lastname}</h1>
                <button onClick={() => ondelete(user.id) }>delete</button>
                <Link to={`/users/${user.id}`}>update</Link>
            </div>)}
        </div>
    )
}

export default MainPage