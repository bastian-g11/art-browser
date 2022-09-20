import { Artwork, ErrorResponse } from 'types';

interface RemoveArworkFromUserArgs {
  variables: {
    removeArtworkFromUserId: string;
    artworkId: string;
  };
}

interface RemoveFromFavoritesProps {
  userId: string;
  api_id: string;
  removeArtworkFromUser: ({
    variables: { removeArtworkFromUserId, artworkId },
  }: RemoveArworkFromUserArgs) => void;
}

const removeFromFavorites = async ({
  userId,
  api_id,
  removeArtworkFromUser,
}: RemoveFromFavoritesProps) => {
  try {
    await removeArtworkFromUser({
      variables: {
        removeArtworkFromUserId: userId,
        artworkId: api_id,
      },
    });
    return null;
  } catch (err) {
    const error = err as ErrorResponse;
    return error;
  }
};

export { removeFromFavorites };
