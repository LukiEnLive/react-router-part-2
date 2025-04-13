import { MessageData } from "../models/message-data";
import { UserData } from "../models/user-data";

class MessageService
{
    /**
     * Récupère tous les messages d'une conversation
     * @param {UserData} connectedUser Utilisateur actuellement connecté
     * @param {UserData} correspondent Second utilisateur de la conversation
     * @returns {Promise<MessageData[]>} La liste des messages échangés entre ces deux personnes
     */
    public async findAll(connectedUser: UserData, correspondent: UserData): Promise<MessageData[]>
    {
        return [
            { id: 1, from: connectedUser, to: correspondent, content: "Salut !" },
            { id: 2, from: correspondent, to: connectedUser, content: "Hello ! Comment vas tu ?" },
            { id: 3, from: connectedUser, to: correspondent, content: "Ca va, et toi ?" },
            { id: 4, from: correspondent, to: connectedUser, content: "Ca va ! Premier barbecue aujourd'hui, l'été arrive !" },
        ]
    }

    /**
     * Envoie un message à un correspondant
     * @param {UserData} from Utilisateur émetteur du message
     * @param {UserData} to Utilisateur destinataire du message 
     * @param {string} message Contenu du message
     * @returns {Promise<MessageData | null>} Les données du message envoyé si l'envoi est un succès, null sinon
     */
    public async send(from: UserData, to: UserData, message: string): Promise<MessageData | null>
    {
        return null;
    }
}

export const messageService = new MessageService();