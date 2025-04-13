import "./login-view.css"
import { LoginForm } from "../../components/forms/login-form/login-form";
import { useNavigate } from "react-router";
import { LoginData } from "../../../models/login-data";
import { authService } from "../../../services/auth-service";
import { RouteURL } from "../../routes/route-url";

export function LoginView()
{
    const navigate = useNavigate();

    const goToRegister = () => {
        navigate(RouteURL.REGISTER);
    }

    const goToMessenger = () => {
        navigate(RouteURL.HOME);
    }

    const connect = async (data: LoginData) => {
        if(await authService.connect(data))
            goToMessenger();
    }
    
    return (
        <div className="view login-view">
            <LoginForm onValidate={connect} />
            <p>
                Pas de compte ? <a className="link" onClick={goToRegister}>Créez un compte</a>
            </p>
        </div>
    )
}