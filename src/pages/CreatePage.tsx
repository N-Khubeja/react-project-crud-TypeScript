import { Link, useNavigate } from "react-router-dom"
import ForUsers from "../components/ForUsers"
import UserRequest from "../hooks/UseRequest"


const CreatePage :React.FC<{}>= () => {
    
    const {loading,sendrequest} = UserRequest({url:'/api/v1/users',method:'POST'})
    const navigate = useNavigate()

    const onsubmit = (firstname: string | number,lastname: string | number) => {
        sendrequest([{firstname,lastname}],null)
        .then(() => navigate('/'))
        
    }
    if(loading) return <p>...loading</p>
    return(
        <div>
            <Link to={'/'}>main</Link>
            <ForUsers action={onsubmit}/>
        </div>
    )
}

export default CreatePage