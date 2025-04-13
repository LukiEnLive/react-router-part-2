import { ContactData } from "../models/contact-data";

class UserService
{
    /**
     * Demande au serveur la liste de tous les utilisateurs inscrits
     * @returns {Promise<ContactData[]>} La list edes contacts retounés par le serveur
     */
    public async findAll(): Promise<ContactData[]>
    {       
        return [];
    }
}

export const userService = new UserService();