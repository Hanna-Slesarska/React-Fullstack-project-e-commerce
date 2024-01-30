import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div className="account">
                <img src={user.picture} alt={user.name} />
            </div>
            )
    )
            
    
}
export default Account;