import Link from 'next/link';
import React from 'react';

const Navbar = () => (
  <nav className='font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full'>
    <div className='mb-2 sm:mb-0'>
      <Link href='/artworks'>Art Browser</Link>
    </div>
    <div>
      <Link href='/profile'>Profile</Link>

      <Link href='/login'>Logout</Link>
    </div>
  </nav>
);

export { Navbar };
