import { useRef } from "react"
import "./message-editor.css"

type MessageEditorProperties = {
    onSend: (message: string) => void
}

export function MessageEditor({onSend}: MessageEditorProperties)
{
    const txtMessage = useRef<HTMLInputElement>(null);

    const send = () => {
        if(txtMessage.current && txtMessage.current.value !== "")
            onSend(txtMessage.current.value);
    }

    return (
        <div className="message-editor">
            <input ref={txtMessage} type="text" /> <button onClick={send}>Envoyer</button>
        </div>
    )
}