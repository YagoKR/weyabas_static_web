import type { CollectionEntry } from 'astro:content'

/*
getReadingTime():
    Funcion para calcular tiempo de lectura. Consideramos que cualquier cadena de texto que acaba con 1 o mas caracteres en blanco es una palabra.
    Se debe proporcionar un string a partir del cual se calculará el tiempo de lectura.  Si el string está vacío, se devuelve 0.
*/

export function getReadingTime(text: string = ''): number {    
    // Se asume una velocidad de 200 PPM, la media estándar.
    const wpm = 200;
    const wordCount = text ? text.trim().split(/\s+/).length : 0;
    const readingTime = Math.ceil(wordCount / wpm);
    return readingTime
}