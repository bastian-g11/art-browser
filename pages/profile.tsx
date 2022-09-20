import { Navbar, ArtworkGrid } from 'components';
import { useGetProfileData } from 'hooks/useGetProfileData';
import { NextPage } from 'next/types';

const Profile: NextPage = () => {
  const { user, isLoading } = useGetProfileData();

  // FIXME: Add react loading
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />
      {/* FIXME: Should be taken from the context */}
      <div className='container  mx-auto px-4 md:px-12 my-0'>
        <h2 className='text-2xl font-semibold'>{user.getUser.name}</h2>
        <p>{user.getUser.accounts[0]?.email}</p>
        <p className='font-semibold mt-4'>Favorite Artworks</p>
      </div>
      {isLoading ? (
        <h3>Loading..</h3>
      ) : (
        <ArtworkGrid artworks={user.getUser.artworks} isProfile />
      )}
    </>
  );
};
export default Profile;
