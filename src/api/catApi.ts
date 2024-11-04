import {
  CatType,
  DeleteFavouritedCatResponseType,
  FavouritedCatType,
  PostCatImageResponseType,
  PostFavouritedCatResponseType,
} from 'types/catTypes';

import {
  CatSchema,
  FavouritedCatSchema,
  PostFavouritedCatResponseSchema,
  DeleteFavouritedCatResponseSchema,
  VoteSchema,
  PostCatImageResponseSchema,
  PostVoteResponseSchema,
} from '../schemas/schemas';
import {ENDPOINTS} from '../constants/url';
import {
  PostVoteRequestParams,
  PostVoteTypeResponse,
  VoteType,
} from '../types/voteTypes';

const apiKey = process.env.API_KEY || ''; // Default to an empty string

const createHeaders = (contentType = 'application/json') => ({
  'x-api-key': apiKey,
  'Content-Type': contentType,
});

import {ZodSchema} from 'zod';

const apiRequest = async <T>(
  url: string,
  options: RequestInit,
  schema: ZodSchema<T>,
): Promise<T> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Network request failed with status ${response.status}`);
    }
    const jsonData = await response.json();

    const result = schema.safeParse(jsonData);
    if (!result.success) {
      throw new Error(`Validation failed: ${result.error}`);
    }
    return result.data;
  } catch (error) {
    throw new Error(
      `Request to ${url} failed: ${
        error instanceof Error ? error.message : 'Unknown Error'
      }`,
    );
  }
};

export const fetchCats = async (): Promise<CatType[]> => {
  return apiRequest<CatType[]>(
    ENDPOINTS.GET_CATS_URL,
    {headers: createHeaders()},
    CatSchema.array(),
  );
};

export const postCatImage = async (
  uri: string,
): Promise<PostCatImageResponseType> => {
  const formData = new FormData();
  formData.append('file', {
    uri,
    name: 'cat_image.jpg',
    type: 'image/jpeg',
  });

  return apiRequest<PostCatImageResponseType>(
    ENDPOINTS.IMAGES_UPLOAD_URL,
    {
      method: 'POST',
      headers: createHeaders('multipart/form-data'),
      body: formData,
    },
    PostCatImageResponseSchema,
  );
};

export const fetchFavouritedCats = async (): Promise<FavouritedCatType[]> => {
  return apiRequest<FavouritedCatType[]>(
    ENDPOINTS.FAVOURITES_URL,
    {headers: createHeaders()},
    FavouritedCatSchema.array(),
  );
};

export const postFavouriteCat = async (
  imageId: string,
): Promise<PostFavouritedCatResponseType> => {
  return apiRequest(
    ENDPOINTS.FAVOURITES_URL,
    {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify({image_id: imageId}),
    },
    PostFavouritedCatResponseSchema,
  );
};

export const deleteFavouritedCat = async (
  favouritedCatId: number,
): Promise<DeleteFavouritedCatResponseType> => {
  return apiRequest<DeleteFavouritedCatResponseType>(
    ENDPOINTS.DELETE_FAVOURITES_URL(favouritedCatId),
    {
      method: 'DELETE',
      headers: createHeaders(),
    },
    DeleteFavouritedCatResponseSchema,
  );
};

export const fetchCatVotes = async (): Promise<VoteType[]> => {
  return apiRequest<VoteType[]>(
    ENDPOINTS.VOTES_URL,
    {headers: createHeaders()},
    VoteSchema.array(),
  );
};

export const postCatVote = async ({
  imageId,
  value,
}: PostVoteRequestParams): Promise<PostVoteTypeResponse> => {
  return apiRequest<PostVoteTypeResponse>(
    ENDPOINTS.VOTES_URL,
    {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify({image_id: imageId, value}),
    },
    PostVoteResponseSchema,
  );
};
