import "./messenger-view.css"
import { useEffect, useState } from "react";
import { ContactList } from "../../components/contacts/contact-list/contact-list";
import { ContactData } from "../../../models/contact-data";
import { Messenger } from "../../components/messenger/messenger/messenger";
import { authService } from "../../../services/auth-service";
import { UserData } from "../../../models/user-data";
import { useNavigate } from "react-router";
import { RouteURL } from "../../routes/route-url";
import { userService } from "../../../services/user-service";

export function MessengerView()
{
    const navigate = useNavigate();

    const [contacts, setContacts] = useState<ContactData[]>([]);
    const [selectedContact, setSelectedContact] = useState<ContactData | null>(null);
    const [user, setUser] = useState<UserData | null>(null)

    const loadContacts = async () =>
    {
        setContacts(await userService.findAll())
    }

    const testConnection = () =>
    {
        if (authService.isConnected() === false)
            goToLogin();

        const authUser = authService.getUser()

        if (authUser && authUser.id !== user?.id)
            setUser(authUser);
    }

    const goToLogin = () => {
        navigate(RouteURL.LOGIN);
    }

    const disconnect = () => {
        authService.disconnect();
        goToLogin();
    }

    testConnection();

    useEffect(() =>
    {
        loadContacts();
    }, []);

    return (
        <div className="view messenger-view">
            <div className="sidebar">
                <ContactList contacts={contacts} selection={selectedContact} onClick={setSelectedContact} />
                <button onClick={disconnect}>Déconnecter</button>
            </div>
            {user && selectedContact && <Messenger from={{ ...user, online: true }} to={selectedContact} />}
        </div>
    )
}