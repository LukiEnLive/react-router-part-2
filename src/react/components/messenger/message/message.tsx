import "./message.css"
import { MessageData } from "../../../../models/message-data"

type MessageProperties = {
    message: MessageData,
    isMine: boolean
}

export function Message({ message, isMine }: MessageProperties)
{
    return (
        <div className={`message ${isMine ? "mine" : ""}`}>
            <p>
                {message.content}
            </p>
        </div>
    )
}