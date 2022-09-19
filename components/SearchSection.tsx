import { SearchForm } from '@components/SearchForm';
import { ArtworkGrid } from 'components/ArtworkGrid';
import { useFetchArtworks } from 'hooks/useFetchArtworks';

const SearchSection = () => {
  const { artworks, isLoading, search } = useFetchArtworks();

  const onInputSubmit = (newQuery: string): void => {
    const query = newQuery;
    console.log(
      '🚀 ~ file: SearchSection.tsx ~ line 10 ~ onInputSubmit ~ query',
      query
    );

    search(query);
  };

  return (
    <>
      <SearchForm onInputSubmit={onInputSubmit} />
      {isLoading ? <h3>Loading..</h3> : <ArtworkGrid artworks={artworks} />}
    </>
  );
};

export { SearchSection };
