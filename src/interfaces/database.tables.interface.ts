export interface ProvidersInterface {
    id?: string;
    name: string;
    socialReason: string;
    address: string;
    deleted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface VersionInterface {
    id?: string;
    version: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UsersInterface {
    id?: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}