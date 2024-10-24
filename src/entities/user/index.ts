import { Role } from "./roles";


export interface UserProps {
    name: string;
    password: string; 
    role: Role;
}


export class User {
    name: string;
    password: string;
    role: Role;

    constructor (name: string, password: string, role: Role) {
        this.name = name;
        this.password = password;
        this.role = role;
    };
}