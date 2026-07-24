// src/schemaTypes/post.ts
export default {
    name: 'posts',
    title: 'Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título',
            type: 'string',
        },
        {
            name: 'author',
            title: 'Autor',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Fecha',
            type: 'datetime',
        },
        {
            name: 'categories',
            title: 'Categorías',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'summary',
            title: 'Resumen',
            type: 'text',
        },
    ],
};