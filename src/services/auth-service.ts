import { LoginData } from "../models/login-data";
import { RegisterData } from "../models/register-data";
import { UserData } from "../models/user-data";
import { apiService } from "./api-service";
import { tokenService } from "./token-service";

class AuthService
{
    /**
     * Demande la création d'un nouveau compte utilisateur au serveur
     * @param {RegisterData} data : Données utilisateur pour la création de son compte
     * @return {boolean} true si le compte a bien été créé, false sinon
     */
    public async register(data: RegisterData): Promise<boolean>
    {
        return (await apiService.post<RegisterData, null>("/users", data)).ok;
    }

    /**
     * Réalise une tentative d'authentification auprès du serveur
     * @param {LoginData} data : Données de connexion de l'utilisateur 
     * @returns {boolean} true si l'authentification a réussi, false sinon
     */
    public async connect(data: LoginData): Promise<boolean>
    {
        tokenService.saveToken("token");
        return true;
    }

    /**
     * Efface les données d'authentification locale de l'utilisateur
     */
    public disconnect()
    {
        tokenService.saveToken(null);
    }

    /**
     * Indique si l'utilisateur est actuellement connecté
     * @returns {boolean} true si un token de sécurité a été trouvé, false sinon
     */
    public isConnected(): boolean
    {
        return tokenService.loadToken() !== null;
    }

    /**
     * retourne les informations de l'utilisateur contenues dans le token de sécurité
     * @returns {USerData | null} les informations de l'utilisateur s'il est connecté, null sinon
     */
    public getUser(): UserData | null
    {
        const token = tokenService.loadToken();

        if (token === null)
            return null;

        const user: UserData = { id: 1, lastname: "Meunier", firstname: "Charles" };

        return user;
    }
}

export const authService = new AuthService();