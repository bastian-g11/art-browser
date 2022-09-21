import { SearchForm } from '@components/SearchForm';
import { ArtworkGrid } from 'components/ArtworkGrid';
import { useFetchArtworks } from 'hooks/useFetchArtworks';
import ReactLoading from 'react-loading';

const SearchSection = () => {
  const { artworks, isLoading, search } = useFetchArtworks();

  const onInputSubmit = (newQuery: string): void => {
    const query = newQuery;

    search(query);
  };

  return (
    <>
      <SearchForm onInputSubmit={onInputSubmit} />
      {isLoading ? (
        <div className='flex justify-center mt-8'>
          <ReactLoading type='spin' color='#CC9F54' height={40} width={40} />
        </div>
      ) : (
        <ArtworkGrid artworks={artworks} isProfile={false} />
      )}
    </>
  );
};

export { SearchSection };
