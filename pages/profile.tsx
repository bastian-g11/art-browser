import { Navbar, ArtworkGrid } from 'components';
import { useGetProfileData } from 'hooks/useGetProfileData';
import { NextPage } from 'next/types';

const Profile: NextPage = () => {
  const { user, artworks, isLoading } = useGetProfileData();

  // FIXME: Add react loading
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />
      {/* FIXME: Should be taken from the context */}
      <div className='container  mx-auto px-4 md:px-12 my-4'>
        <h2 className='text-4xl font-semibold'>{user?.name}</h2>
        <p>{user?.email}</p>
        <p className='font-semibold mt-4'>Favorite Artworks</p>
      </div>
      {isLoading ? (
        <h3>Loading..</h3>
      ) : (
        <ArtworkGrid artworks={artworks} isProfile />
      )}
    </>
  );
};
export default Profile;
