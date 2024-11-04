import {z} from 'zod';

export const BreedSchema = z.object({
  id: z.number(),
  name: z.string(),
  wikipedia_url: z.string().url(),
});

const FavouritedCatImageSchema = z.object({
  id: z.string(),
  url: z.string().url(),
});

export const CatSchema = z.object({
  breed_ids: z.null(),
  breeds: z.array(BreedSchema),
  created_at: z.string(),
  height: z.number(),
  id: z.string(),
  original_filename: z.string(),
  sub_id: z.null(),
  url: z.string().url(),
  width: z.number(),
});

export const CatsArraySchema = CatSchema.array();

export const FavouritedCatSchema = z.object({
  id: z.number(),
  user_id: z.string(),
  image_id: z.string(),
  sub_id: z.string().nullable(),
  created_at: z.string(),
  image: FavouritedCatImageSchema,
  value: z.number().optional(),
});

export const FavouritedCatsArraySchema = FavouritedCatSchema.array();

export const PostFavouritedCatResponseSchema = z.object({
  id: z.number(),
  message: z.string(),
});

export const DeleteFavouritedCatResponseSchema = z.object({
  message: z.string(),
});

export const PostVoteResponseSchema = z.object({
  message: z.string(),
  id: z.number(),
  image_id: z.string(),
  sub_id: z.string(),
  value: z.number(),
  country_code: z.string(),
});

export const VoteSchema = z.object({
  id: z.number(),
  image_id: z.string(),
  value: z.number(),
  created_at: z.string(),
});

export const VotesArraySchema = VoteSchema.array();

export const PostCatImageResponseSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  sub_id: z.string().optional(),
  width: z.number(),
  height: z.number(),
  original_filename: z.string(),
  pending: z.number(),
  approved: z.number(),
});
