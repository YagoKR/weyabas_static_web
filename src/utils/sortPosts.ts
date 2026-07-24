import type { CollectionEntry } from 'astro:content'
/*
Esta función permite ordenar las entradas por su fecha de publicación. 
    - posts (object): el array de posts que está definido en la collection.
    - ascending (bool): si es false, ordena de manera descendiente (más nuevo a más viejo). 
    Si es true, ordena de manera ascendiente (más viejo a más nuevo). Esto podría permitir a los usuarios ordenar
    según prefieran.
*/
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