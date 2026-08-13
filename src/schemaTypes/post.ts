import { maxLength } from "astro:schema";

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
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
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
            name: 'image',
            title: 'Imagen',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto Alternativo'
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Pie de foto',
                    description: 'Ej: Imagen de tal película, escena de tal anime, etc.'
                }
            ]
        },
        {
            name: 'categories',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'News', value: 'news' },
                    { title: 'Series', value: 'series' },
                    { title: 'Anime', value: 'anime' },
                    { title: 'Movies', value: 'movies' },
                    { title: 'Tech', value: 'tech' },
                    { title: 'Theories', value: 'theories' },
                ],
                layout: 'checkbox',
            },
        },
        {
            name: 'summary',
            title: 'Resumen',
            type: 'text',
        },
        {
            name: 'content',
            title: 'Contenido',
            type: 'array',
            of: [{ type: 'block' }],
        }
    ],
};