export enum SCHEMAS {
    PUBLIC = 'public'
};

export enum TABLES {
    PROVIDERS = 'providers',
    USERS = 'users',
    VERSION = 'version'
};

export enum STATUS_CODES {
    OK = 200,
    BAD_REQUEST = 400
}

export enum PAGINATION {
    LIMIT = 20,
    OFFSET = 0
}

export enum MESSAGE_INTERNAL_SERVER_ERROR {
    message = 'Oops, lo sentimos pero ha ocurrido un error interno en el servidor.'
}

export enum QUERY_PARAMS {
    PARAMS = 'params',
    BODY = 'body',
    QUERY = 'query'
};