// urlFor.ts

import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from '../lib/sanity';

/**
* urlFor: Construye las URLs de los objetos de imagen de Sanity.
* 
* @param source - La imagen de Sanity.
*/
export function urlFor(source: any) {
  const builder = createImageUrlBuilder(client);
  return builder.image(source);
}