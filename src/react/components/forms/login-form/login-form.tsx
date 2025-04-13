import { useRef } from "react";
import { LoginData } from "../../../../models/login-data";
import "./login-form.css";

type LoginFormProperties = {
    onValidate: (data: LoginData) => void
}

export function LoginForm({onValidate}: LoginFormProperties)
{
    const txtLogin = useRef<HTMLInputElement>(null);
    const txtPassword = useRef<HTMLInputElement>(null);

    const connect = () => {
        const data = getData();

        onValidate(data);
    }

    const getData = () => {
        const data: LoginData = {
            login: txtLogin.current?.value ?? "",
            password: txtPassword.current?.value ?? ""
        }
        
        return data;
    }

    return (
        <form className="login-form">
            <h2>Connexion</h2>
            <label>Login</label>
            <input ref={txtLogin} type="text" />
            <label>Mot de passe</label>
            <input ref={txtPassword} type="password" />
            <button type="button" onClick={connect}>Connexion</button>
        </form>
    )
}