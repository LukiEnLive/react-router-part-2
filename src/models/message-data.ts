import { UserData } from "./user-data"

export type MessageData = {
    id: number,
    from: UserData,
    to: UserData,
    content: string
}