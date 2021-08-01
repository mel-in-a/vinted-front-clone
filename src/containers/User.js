import { useHistory } from "react-router-dom";

const User = (userToken) => {
    console.log(userToken);
    const history = useHistory();
    userToken === null && history.push("/");
    
    return (
        
        <div className="container">
            <h1>User</h1>
        </div>
    )
}

export default User;