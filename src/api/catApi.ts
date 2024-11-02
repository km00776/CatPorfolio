import {CAT_API_BASE_URL} from '../constants/url';

const HEADERS = {
  'x-api-key':
    'live_05fPDmjaq25eNtqn95DHWDzk76Xgd90yZSZnCWq7Xad3BGc7M7VOgxebObQtg8Zd',
};

export const fetchCats = async () => {
  try {
    const response = await fetch(CAT_API_BASE_URL, {
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error('Network request was not ok');
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Failed to fetch cats: ${
        error instanceof Error ? error.message : 'Unknown Error'
      }`,
    );
  }
};

export const postCat = async (uri: any) => {
  // move formdata to hook
  const formData = new FormData();

  formData.append('file', {
    uri,
    name: 'cat_image.jpg',
    type: 'image/jpeg',
  });

  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/upload`, {
      method: 'POST',
      headers: HEADERS,
      // 'content-type': 'multipart/form-data', <-- WITHOUT THIS WE MIGHT GET AN ERROR

      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Failed to post cat image: ${
        error instanceof Error ? error.message : 'Unknown Error'
      }`,
    );
  }
};

export const fetchFavouritedCats = async () => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/favourites`, {
      headers: HEADERS,
    });

    if (!response.ok) {
      throw new Error('Network error when calling fetchFavouritedCats');
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Failed to fetch favourited cats: ${
        error instanceof Error ? error.message : 'Unknown Error'
      }`,
    );
  }
};
