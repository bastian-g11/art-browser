import { Navbar, ArtworkGrid } from 'components';
import { useGetProfileData } from 'hooks/useGetProfileData';
import { NextPage } from 'next/types';
import ReactLoading from 'react-loading';

const Profile: NextPage = () => {
  const { user, artworks, isLoading } = useGetProfileData();

  if (isLoading) {
    return (
      <div className='container flex justify-center items-center h-screen mt-8'>
        <ReactLoading type='spin' color='#CC9F54' height={40} width={40} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className='container  mx-auto px-4 md:px-12 my-4'>
        {/* @ts-ignore */}
        <h2 className='text-4xl font-semibold'>{user?.name}</h2>
        {/* @ts-ignore */}
        <p>{user?.email}</p>
        <p className='font-semibold mt-4'>Favorite Artworks</p>
      </div>
      {isLoading ? (
        <div className='flex justify-center mt-8'>
          <ReactLoading type='spin' color='#CC9F54' height={40} width={40} />
        </div>
      ) : (
        <ArtworkGrid artworks={artworks} isProfile />
      )}
    </>
  );
};
export default Profile;
