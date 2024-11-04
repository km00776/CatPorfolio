export const CAT_API_BASE_URL = 'https://api.thecatapi.com/v1/images';

export const ENDPOINTS = {
  GET_CATS_URL: `${process.env.API_BASE_URL}/images/?limit=10`,
  IMAGES_UPLOAD_URL: `${process.env.API_BASE_URL}/images/upload`,
  FAVOURITES_URL: `${process.env.API_BASE_URL}/favourites`,
  VOTES_URL: `${process.env.API_BASE_URL}/votes`,
  DELETE_FAVOURITES_URL: (favouritedCatId: number) =>
    `${process.env.API_BASE_URL}/favourites/${favouritedCatId}`,
};
