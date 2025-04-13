import { UserData } from "./user-data"

export type ContactData = UserData & {
    online: boolean
}
