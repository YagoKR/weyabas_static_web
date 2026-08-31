import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts",
  }),

  // Aqui se definen los "metadatos" del post. El tipo de dato es configurable por nosotros dependiendo de lo que queramos.
  schema: z.object({
    author: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    categories: z.array(z.string()),
    summary: z.string(),
  }),
});

// Se exporta la coleccion con la palabra clave 'posts'
export const collections = {
  posts: postsCollection,
};
