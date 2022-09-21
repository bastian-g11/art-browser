// import { useFetchArtworks } from 'hooks/useFetchArtworks';
import { ArtworkItem } from 'components/ArtworkItem';
import { Artwork } from 'types';
import { nanoid } from 'nanoid';
import { useUserContext } from 'providers/UserProvider';

const ArtworkGrid = ({
  artworks,
  isProfile,
}: {
  artworks: Artwork[];
  isProfile: boolean;
}) => {
  const user = useUserContext();

  return (
    <div className='container mb-12 mx-auto px-4 md:px-12'>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {artworks.length === 0 && (
          <p className=' m-auto py-4 text-gray-500'>
            No images found? Try again
          </p>
        )}
        {artworks.map((artwork: Artwork) => (
          <ArtworkItem
            key={nanoid()}
            artwork={artwork}
            userId={user.id}
            isProfile={isProfile}
          />
        ))}
      </div>
    </div>
  );
};

export { ArtworkGrid };
