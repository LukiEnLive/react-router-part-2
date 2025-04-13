import { useRef } from "react";
import { RegisterData } from "../../../../models/register-data"
import "./register-form.css"

type RegisterFormProperties = {
    onValidate: (registerData: RegisterData) => void
}

export function RegisterForm({onValidate}: RegisterFormProperties)
{
    const txtLogin = useRef<HTMLInputElement>(null);
    const txtPassword = useRef<HTMLInputElement>(null);
    const txtConfirmPassword = useRef<HTMLInputElement>(null);
    const txtLastname = useRef<HTMLInputElement>(null);
    const txtFirstname = useRef<HTMLInputElement>(null);

    const createAccount = () =>
    {
        const data = getData();

        if(validateData(data))
            onValidate(data);
    }

    const getData = () => {
        const data: RegisterData = {
            login: txtLogin.current?.value ?? "",
            password: txtPassword.current?.value ?? "",
            lastname: txtLastname.current?.value ?? "",
            firstname: txtFirstname.current?.value ?? "",
        }

        return data;
    }

    const validateData = (data: RegisterData) => {
        if(data.password !== txtConfirmPassword.current?.value)
            return false;

        return true;
    }

    return (
        <form className="register-form">
            <h2>Inscription</h2>
            <label>Nom</label>
            <input ref={txtLastname} type="text" />
            <label>Prénom</label>
            <input ref={txtFirstname} type="text" />
            <label>Login</label>
            <input ref={txtLogin} type="text" />
            <label>Mot de passe</label>
            <input ref={txtPassword} type="password" />
            <label>Confirmation du mot de passe</label>
            <input ref={txtConfirmPassword} type="password" />
            <button type="button" onClick={createAccount}>Créer le compte</button>
        </form>
    )
}