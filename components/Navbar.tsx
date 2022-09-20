import { useLogout } from 'hooks/useLogout';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { logout } = useLogout();

  return (
    <nav className='font-sans flex flex-row text-center text-left justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full'>
      <div className='mb-2 sm:mb-0'>
        <Link href='/artworks'>Art Browser</Link>
      </div>
      <div>
        <Link href='/profile'>Profile</Link>

        <button
          className='bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='button'
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
export { Navbar };
