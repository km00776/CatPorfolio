export interface CatType {
  breed_ids: null;
  breeds: []; // this should be a breed array, however, for this implementation its fine to keep as it is
  created_at: string;
  height: number;
  id: string;
  original_filename: string;
  sub_id: null;
  url: string;
  width: number;
}
export interface FavouritedCatType {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: string;
  image: FavouritedCatImage;
}

export interface FavouritedCatImage {
  id: string;
  url: string;
}
