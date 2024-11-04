import {z} from 'zod';
import {
  BreedSchema,
  CatSchema,
  FavouritedCatSchema,
  PostFavouritedCatResponseSchema,
  DeleteFavouritedCatResponseSchema,
  PostCatImageResponseSchema,
} from '../schemas/schemas';

// If the back-end types, we can use this update the types too, by updating schemas
export type BreedType = z.infer<typeof BreedSchema>;

export type CatType = z.infer<typeof CatSchema>;

export type FavouritedCatType = z.infer<typeof FavouritedCatSchema>;

export type PostFavouritedCatResponseType = z.infer<
  typeof PostFavouritedCatResponseSchema
>;

export type DeleteFavouritedCatResponseType = z.infer<
  typeof DeleteFavouritedCatResponseSchema
>;

export type PostCatImageResponseType = z.infer<
  typeof PostCatImageResponseSchema
>;
