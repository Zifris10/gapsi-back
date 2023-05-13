export interface StatusResponseInterface {
    statusCode: number;
    error?: string;
    message?: string;
    data?: any;
    total?: number;
}