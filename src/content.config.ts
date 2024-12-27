// 1. Import utilities from `astro:content`
// import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
//import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
// const blog = defineCollection({ /* ... */ });
// const dogs = defineCollection({ /* ... */ });
// -- 
// Above this is from the docs. I chose to do this part in the
// content directory itself
// which is why the import is all the way down here
import { postsCollection, specCollection } from './content/config.ts'
// --

// 4. Export a single `collections` object to register your collection(s)
export const collections = { posts: postsCollection, spec: specCollection };
