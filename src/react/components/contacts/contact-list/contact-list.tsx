import "./contact-list.css"
import { ContactData } from "../../../../models/contact-data";
import { ContactListItem } from "../contact-list-item/contact-list-item";

type ContactListProperties = {
    contacts: ContactData[];
    selection: ContactData | null;
    onClick: (clickedContact: ContactData) => void
}

export function ContactList({ contacts, selection, onClick }: ContactListProperties)
{
    return (
        <div className="contact-list">
            {
                contacts.map((contact) => { 
                    return <ContactListItem 
                        key={`contact*list-item-${contact.id}`} 
                        contact={contact} 
                        isSelected={contact.id === selection?.id}
                        onClick={() => {onClick(contact)}}    
                    />})
            }
        </div>
    )
}