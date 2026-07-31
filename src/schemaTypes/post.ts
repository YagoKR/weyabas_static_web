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
            initialValue: () => new Date().toISOString(),
            readOnly: true,
        },
        {
            name: 'categories',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Series', value: 'series' },
                    { title: 'Anime', value: 'anime' },
                    { title: 'Movies', value: 'movies' },
                    { title: 'Tech', value: 'tech' },
                    { title: 'Theories', value: 'theories'},
                ],
                layout: 'checkbox',
            },
        },
        {
            name: 'summary',
            title: 'Resumen',
            type: 'text',
        },
    ],
};