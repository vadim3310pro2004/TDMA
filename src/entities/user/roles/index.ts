

export interface Role {
    name: string;
}

export { default as adminRole } from "./admin";
export { default as moderatorRole } from "./moderator";
export { default as ownerRole } from "./owner";