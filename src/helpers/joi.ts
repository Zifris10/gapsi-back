import Joi, { ObjectSchema } from 'joi';

const string: Joi.StringSchema<string> = Joi.string();
const uuid: Joi.StringSchema<string> = Joi.string().uuid();
const alpha: Joi.StringSchema<string> = Joi.string().regex(/^[A-Za-záéíóúÁÉÍÓÚ\s]*$/);
const number: Joi.NumberSchema<number> = Joi.number().integer();

export const schemaQueryParams: ObjectSchema = Joi.object({
    limit: number.optional().messages({
        'number.base': `Oops, lo sentimos pero el limit solo acepta números.`,
        'number.integer': `Oops, lo sentimos pero el limit debe ser un número entero.`
    }),
    offset: number.optional().messages({
        'number.base': `Oops, lo sentimos pero el offset solo acepta números.`,
        'number.integer': `Oops, lo sentimos pero el offset debe ser un número entero.`
    })
});

export const schemaID: ObjectSchema = Joi.object({
    id: uuid.messages({
        'string.guid': `Oops, lo sentimos pero el id debe ser de tipo uuid.`
    })
});

export const schemaProvider: ObjectSchema = Joi.object({
    name: alpha.required().min(5).max(50).messages({
        'string.min': `Oops, lo sentimos pero el nombre debe tener mínimo 5 caracteres.`,
        'string.max': `Oops, lo sentimos pero el nombre debe tener máximo 50 caracteres.`,
        'string.empty': `Oops, lo sentimos pero el nombre no puede estar vacío.`,
        'string.base': `Oops, lo sentimos pero el nombre no es válido.`,
        'string.pattern.base': `Oops, lo sentimos pero el nombre solo permite letras.`,
        'any.required': `Oops, lo sentimos pero el nombre es requerido.`
    }),
    socialReason: alpha.required().min(5).max(50).messages({
        'string.min': `Oops, lo sentimos pero la razón social debe tener mínimo 5 caracteres.`,
        'string.max': `Oops, lo sentimos pero la razón social debe tener máximo 50 caracteres.`,
        'string.empty': `Oops, lo sentimos pero la razón social no puede estar vacío.`,
        'string.base': `Oops, lo sentimos pero la razón social no es válido.`,
        'string.pattern.base': `Oops, lo sentimos pero la razón social solo permite letras.`,
        'any.required': `Oops, lo sentimos pero la razón social es requerida.`
    }),
    address: string.required().min(5).max(100).messages({
        'string.min': `Oops, lo sentimos pero la dirección debe tener mínimo 5 caracteres.`,
        'string.max': `Oops, lo sentimos pero la dirección debe tener máximo 50 caracteres.`,
        'string.empty': `Oops, lo sentimos pero la dirección no puede estar vacío.`,
        'string.base': `Oops, lo sentimos pero la dirección no es válido.`,
        'string.pattern.base': `Oops, lo sentimos pero la dirección solo permite letras.`,
        'any.required': `Oops, lo sentimos pero la dirección es requerida.`
    })
});