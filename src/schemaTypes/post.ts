import { maxLength } from "astro:schema";
import { validation, type SlugRule } from 'sanity';
import type { Rule } from 'sanity'

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
                slugify: (input: string) => input
                    .toLowerCase()
                    .trim()
                    .replace(/[àáâäæãåā]/g, 'a')
                    .replace(/[èéêëē]/g, 'e')
                    .replace(/[ìíîïī]/g, 'i')
                    .replace(/[òóôöœøōõ]/g, 'o')
                    .replace(/[ùúûüū]/g, 'u')
                    .replace(/ñ/g, 'n')
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]+/g, '')
                    .replace(/\-\-+/g, '-')
            },
            validation: (Rule: SlugRule) => Rule.required().error('Debes generar el slug antes de publicar.'),
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
            ],
            validation: (Rule: Rule) => Rule.required().error('Debes subir una imagen antes de publicar.'),
        },
        {
            name: 'categories',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    // { title: 'News', value: 'news' },
                    { title: 'Series', value: 'series' },
                    { title: 'Anime', value: 'anime' },
                    { title: 'Tech', value: 'tech' },
                    { title: 'Movies', value: 'movies' },
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
        },
        {
            name: 'views',
            title: 'Número de clics (views)',
            type: 'number',
            initialValue: 0,
            readOnly: true,
            hidden: true,
        }
    ],
};