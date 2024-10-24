import { adminRole, moderatorRole, ownerRole, Role } from "./roles";


export interface User {
    name: string;
    password: string;
    role: Role
}


const users: User[] = [
    {
        name: "shrack",
        password: "asd123",
        role: adminRole,
    },
    {
        name: "user123",
        password: "1234",
        role: moderatorRole,
    },
    {
        name: "user000",
        password: "qq11",
        role: ownerRole,
    }
];


export default users