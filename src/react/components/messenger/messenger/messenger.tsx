import "./messenger.css"

import { MessageEditor } from "../message-editor/message-editor";
import { MessageList } from "../message-list/message-list";
import { ContactData } from "../../../../models/contact-data";
import { useEffect, useState } from "react";
import { MessageData } from "../../../../models/message-data";
import { messageService } from "../../../../services/message-service";

type MessengerProperties = {
    from: ContactData,
    to: ContactData,
}

export function Messenger({from, to}: MessengerProperties)
{
    const [messages, setMessages] = useState<MessageData[]>([]);
    
    const loadMessages = async () => {
        setMessages(await messageService.findAll(from, to))
    }

    const sendMessage = (message: string) => {
        setMessages([...messages, {id: (messages[messages.length - 1]?.id ?? 0) + 1, from: from, to: to, content: message}])
    }

    useEffect(() => {
        loadMessages();
    }, [])

    return (
        <div className="messenger">
            <MessageList messages={messages} from={from} />
            <MessageEditor onSend={sendMessage} />
        </div>
    )
}