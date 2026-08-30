import { type SlugRule, type Rule } from 'sanity';

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
            validation: (Rule: Rule) => Rule.required().error('El título es obligatorio.'),
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
            validation: (Rule: Rule) => Rule.required().error('El autor es obligatorio.'),
        },
        {
            name: 'date',
            title: 'Fecha',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            readOnly: true,
            validation: (Rule: Rule) => Rule.required(),
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
                    title: 'Texto Alternativo',
                    validation: (Rule: Rule) => Rule.required().error('El texto alternativo es obligatorio para accesibilidad.'),
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Pie de foto',
                    description: 'Ej: Imagen de tal película, escena de tal anime, etc.',
                    validation: (Rule: Rule) => Rule.required().error('El pie de foto es obligatorio.'),
                }
            ],
            validation: (Rule: Rule) => Rule.required().error('Debes subir una imagen antes de publicar.'),
        },
        {
            name: 'categories',
            title: 'Categorías',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Series', value: 'series' },
                    { title: 'Anime', value: 'anime' },
                    { title: 'Tech', value: 'tech' },
                    { title: 'Movies', value: 'movies' },
                    { title: 'Theories', value: 'theories' },
                ],
                layout: 'checkbox',
            },
            validation: (Rule: Rule) => Rule.required().min(1).error('Debes seleccionar al menos una categoría.'),
        },
        {
            name: 'summary',
            title: 'Resumen',
            type: 'text',
            validation: (Rule: Rule) => Rule.required().error('El resumen es obligatorio.'),
        },
        {
            name: 'content',
            title: 'Contenido',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule: Rule) => Rule.required().min(1).error('El contenido del post no puede estar vacío.'),
        },
        {
            name: 'views',
            title: 'Número de clics (views)',
            type: 'number',
            initialValue: 0,
            readOnly: true,
            hidden: true,
            validation: (Rule: Rule) => Rule.required(),
        }
    ],
};