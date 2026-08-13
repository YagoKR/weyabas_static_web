// sortPosts.ts

/*
    sortPosts(): ordena las entradas en base a su fecha de publicación.

    * @deprecated - Esta funcion está obsoleta. Se utiliza la ordenación GROQ de Sanity `| order(date desc)` en su lugar.
    * @param posts - La estructura de datos completa de las entradas.
    * @param ascending - Si es true, organiza los posts de manera ascedente.
    * @returns - Los artículos ordenados por fecha de publicación.
*/
import type { CollectionEntry } from 'astro:content'
export function sortPosts(posts: CollectionEntry<"posts">[], ascending=false){
    return posts.sort((a, b) => {
        const dateA = new Date(a.data.date);
        const dateB = new Date(b.data.date);
    if (ascending) {
        return dateA.getTime() - dateB.getTime();
    } else {
        return dateB.getTime() - dateA.getTime();
    }
    });
}