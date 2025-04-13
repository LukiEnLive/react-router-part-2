class TokenService
{
    /**
     * Enregistre le token de sécurité dans le session Storage
     * @param {string | null} token Token de sécurité de l'utiilsateur
     */
    public saveToken(token: string | null)
    {
        if (token)
            sessionStorage.setItem("token", token);
        else
            sessionStorage.removeItem("token");
    }

    /**
     * Charge le token de sécurité depuis le session storage
     * @returns {string | null} le token de sécurité trouvé ou null
     */
    public loadToken(): string | null
    {
        return sessionStorage.getItem("token");
    }
}

export const tokenService = new TokenService();