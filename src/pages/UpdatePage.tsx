import { useNavigate, useParams } from "react-router-dom"
import ForUsers from "../components/ForUsers"
import UseFetch from "../hooks/UseFetch"
import UserRequest from "../hooks/UseRequest"

const UpdatePage:React.FC<{}> = () => {
    const {userid} = useParams()
    const navigate = useNavigate()
    const {response,error,loading} = UseFetch({url:`/api/v1/users/${userid}`,method:'GET'})
    const {sendrequest} = UserRequest({url:`/api/v1/users/${userid}`,method:'PUT'})

    const onsubmit = (firstname: string | number,lastname: string | number) => {
        sendrequest({ firstname, lastname })
        .then(() => navigate('/'))
    }
    console.log(response)
    if(error &&  !response) return <p>...{error}</p>
    if(loading || !response) return <p>...loading</p>
    return(
        <div>
            <ForUsers action={onsubmit} deffirstname={response.firstname } deflastname={response.lastname} />
            updatee
        </div>
    )
}

export default UpdatePage