import "./register-view.css"
import { RegisterForm } from "../../components/forms/register-form/register-form";
import { useNavigate } from "react-router";
import { RegisterData } from "../../../models/register-data";
import { authService } from "../../../services/auth-service";
import { RouteURL } from "../../routes/route-url";

export function RegisterView()
{
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate(RouteURL.LOGIN);
    }

    const createAccount = async (registerData: RegisterData) => {
        if(await authService.register(registerData))
            goToLogin();
    }

    return (
        <div className="view register-view">
            <RegisterForm onValidate={createAccount} />
            <p>
                Déjà un compte ? <a className="link" onClick={goToLogin}>Connectez-vous</a>
            </p>
        </div>
    )
}