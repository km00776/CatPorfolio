import {API_BASE_URL} from '@env';

export const CAT_API_BASE_URL = 'https://api.thecatapi.com/v1/images';

export const ENDPOINTS = {
  GET_CATS_URL: `${API_BASE_URL}/images/?limit=10`,
  IMAGES_UPLOAD_URL: `${API_BASE_URL}/images/upload`, // Points directly to the upload endpoint
  FAVOURITES_URL: `${API_BASE_URL}/favourites`,
  VOTES_URL: `${API_BASE_URL}/votes`,
  DELETE_FAVOURITES_URL: (favouritedCatId: number) =>
    `${API_BASE_URL}/favourites/${favouritedCatId}`,
};
