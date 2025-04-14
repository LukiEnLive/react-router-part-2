import { ContactData } from "../models/contact-data";
import { UserData } from "../models/user-data";

class UserService
{
    /**
     * Demande au serveur la liste de tous les utilisateurs inscrits
     * @returns {Promise<ContactData[]>} La list edes contacts retounés par le serveur
     */
    public async findAll(): Promise<ContactData[]>
    {
        let result : ContactData[] = [];

        const response = await fetch("http://localhost:3333/users");

        if (response.status === 200){
            const responseData = await response.json();
            responseData.map((u: { id: number; lastname: string; firstname: string; online: boolean; }) => {
                const ud : UserData = {
                    id: u.id,
                    lastname: u.lastname,
                    firstname: u.firstname
                }
                const cd : ContactData =  {
                    ...ud,
                    online: u.online
                }
                result.push(cd)
            })

        }

        return result;
    }
}

export const userService = new UserService();