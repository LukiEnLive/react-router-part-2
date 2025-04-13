import { ContactData } from "../../../../models/contact-data"
import { MessageData } from "../../../../models/message-data"
import { Message } from "../message/message"
import "./message-list.css"

type MessageListProperties = {
    messages: MessageData[],
    from: ContactData
}

export function MessageList({messages, from}: MessageListProperties)
{
    return (
        <div className="message-list">
            {
                messages.map((message) => {
                    return <Message key={`message-${message.id}`} message={message} isMine={message.from.id === from.id} />
                })
            }
        </div>
    )
}