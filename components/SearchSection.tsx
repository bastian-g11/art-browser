import { SearchForm } from '@components/SearchForm';
import { ArtworkGrid } from 'components/ArtworkGrid';
import { useFetchArtworks } from 'hooks/useFetchArtworks';

const SearchSection = () => {
  const { artworks, isLoading, search } = useFetchArtworks();

  const onInputSubmit = (newQuery: string): void => {
    const query = newQuery;

    search(query);
  };

  return (
    <>
      <SearchForm onInputSubmit={onInputSubmit} />
      {/* FIXME: Add react loading */}
      {isLoading ? <h3>Loading..</h3> : <ArtworkGrid artworks={artworks} />}
    </>
  );
};

export { SearchSection };
