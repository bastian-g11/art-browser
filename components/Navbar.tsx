/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLogout } from 'hooks/useLogout';

const Navbar = () => {
  const { logout } = useLogout();
  const { pathname } = useRouter();

  return (
    <nav className='font-sans flex flex-row text-left py-4 px-40 justify-between bg-white shadow sm:items-baseline w-full'>
      {pathname !== '/artworks' && (
        <div className='hover:cursor-pointer'>
          <Link href='/artworks'>
            <img src='/icons/back.svg' alt='Profile icon' className='h-8' />
          </Link>
        </div>
      )}

      <div className='flex ml-auto'>
        {pathname !== '/profile' && (
          <div className='hover:cursor-pointer'>
            <Link href='/profile'>
              <img
                src='/icons/profile.svg'
                alt='Profile icon'
                className='h-8 mx-8'
              />
            </Link>
          </div>
        )}
        <div onClick={logout} className='hover:cursor-pointer'>
          <img src='/icons/logout.svg' alt='Logout icon' className='h-8' />
        </div>
      </div>
    </nav>
  );
};
export { Navbar };
