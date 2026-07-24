import type { CollectionEntry } from 'astro:content'

export function getReadingTime(post: CollectionEntry<'posts'>){
    // Funcion para calcular tiempo de lectura. Consideramos que cualquier cadena de texto que acaba con 1 o mas caracteres en blanco es una palabra.
    // Si no hay palabras, se devuelve 0.
    // Se asume una velocidad de 200 PPM, la media estándar.
    const wpm = 200;
    const wordCount = post.body ? post.body.trim().split(/\s+/).length : 0;
    const readingTime = Math.ceil(wordCount / wpm);
    return readingTime
}