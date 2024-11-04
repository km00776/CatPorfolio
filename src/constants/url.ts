import {API_BASE_URL} from '@env';

export const ENDPOINTS = {
  GET_CATS_URL: `${API_BASE_URL}/images/?limit=10`,
  IMAGES_UPLOAD_URL: `${API_BASE_URL}/images/upload`,
  FAVOURITES_URL: `${API_BASE_URL}/favourites`,
  VOTES_URL: `${API_BASE_URL}/votes`,
  DELETE_FAVOURITES_URL: (favouritedCatId: number) =>
    `${API_BASE_URL}/favourites/${favouritedCatId}`,
};
