import {CAT_API_BASE_URL} from '../constants/url';
import {VoteType} from '../types/voteTypes';

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

export const postCatImage = async (uri: any) => {
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
    const response = await fetch('https://api.thecatapi.com/v1/favourites', {
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

export const postFavouriteCat = async (imageId: string) => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/favourites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...HEADERS, // Ensure HEADERS includes your 'x-api-key'
      },
      body: JSON.stringify({image_id: imageId}),
    });

    if (!response.ok) {
      throw new Error('Network error when calling fetchFavouritedCats');
    }
    const data = response.json();

    return data;
  } catch (error) {
    throw new Error(
      `Failed to postFavouriteCat cats: ${
        error instanceof Error ? error.message : 'Unknown Error'
      }`,
    );
  }
};
//DELETE
export const deleteFavouritedCat = async (favouritedCatId: number) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/favourites/${favouritedCatId}`,
      {
        headers: {
          ...HEADERS,
        },
        method: 'DELETE',
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to remove favourite with ID ${favouritedCatId}`);
    }

    // Await the response data if there's any (some DELETE endpoints return empty bodies)
    const data = await response.json().catch(() => null); // Safely handle empty response

    return data;
  } catch (error) {
    throw new Error(
      `Failed to remove favourite: ${
        error instanceof Error ? error.message : 'Unknown Error'
      }`,
    );
  }
};

export const fetchCatVotes = async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/votes', {
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error('Network request was not ok');
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Failed to fetch votes: ${
        error instanceof Error ? error.message : 'Unknown Error'
      }`,
    );
  }
};

export const postCatVote = async ({imageId, value}: VoteType) => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...HEADERS, // Ensure HEADERS includes your 'x-api-key'
      },
      body: JSON.stringify({image_id: imageId, value}),
    });
    if (!response.ok) {
      throw new Error('Network request was not ok');
    }
    console.log('response', response);
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Failed to post vote: ${
        error instanceof Error ? error.message : 'Unknown Error'
      }`,
    );
  }
};
