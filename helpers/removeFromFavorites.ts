// import { Artwork, ErrorResponse } from 'types';

// interface AddArworkToUserArgs {
//   variables: {
//     addArtworkToUserId: string;
//     artwork: Artwork;
//   };
// }

// interface AddToFavoritesProps {
//   userId: string;
//   addArtworkToUser: ({
//     variables: { addArtworkToUserId, artwork },
//   }: AddArworkToUserArgs) => void;
//   artwork: Artwork;
// }

// const addToFavorites = async ({
//   userId,
//   addArtworkToUser,
//   artwork,
// }: AddToFavoritesProps) => {
//   try {
//     // eslint-disable-next-line @typescript-eslint/naming-convention
//     const { apiId, title, author, site_link, img_link } = artwork;
//     await addArtworkToUser({
//       variables: {
//         addArtworkToUserId: userId,
//         artwork: {
//           apiId,
//           title,
//           author,
//           site_link,
//           img_link,
//           isFavorite: false,
//         },
//       },
//     });
//     return null;
//   } catch (err) {
//     const error = err as ErrorResponse;
//     return error;
//   }
// };

// export { addToFavorites };
