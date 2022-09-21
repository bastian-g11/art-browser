/* eslint-disable @next/next/no-img-element */
import { FormEvent, useEffect, useState } from 'react';
import { NextPage } from 'next/types';
import Image from 'next/image';
import { useLogin } from 'hooks/useLogin';
import Head from 'next/head';
import ReactLoading from 'react-loading';

const Login: NextPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const { login } = useLogin();

  const onSubmit = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setIsLoading(true);
    login({
      email: formData.email,
      password: formData.password,
      setIsLoading,
      setErrorMessage,
    });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='relative'>
      <Head>
        <title>Login</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='flex flex-row h-screen -z-10 '>
        <Image
          src='/sunrise.jpg'
          alt='sunrise'
          layout='fill'
          className='object-cover'
        />
      </div>
      <div className='absolute top-0'>
        <div className='container flex justify-center items-center w-screen h-screen '>
          <div className='w-full max-w-xs '>
            <form
              onSubmit={onSubmit}
              className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            >
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='email'
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={formData.email}
                    onChange={onChange}
                  />
                </label>
              </div>
              <div className='mb-6'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='password'
                >
                  Password
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    id='password'
                    type='password'
                    name='password'
                    placeholder='******************'
                    value={formData.password}
                    onChange={onChange}
                  />
                </label>
                <p className='text-red-500 text-xs italic'>{errorMessage}</p>
              </div>
              <div className='flex justify-center'>
                {isLoading ? (
                  <ReactLoading
                    type='spin'
                    color='#CC9F54'
                    height={40}
                    width={40}
                  />
                ) : (
                  <button
                    className='bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                  >
                    Sign In
                  </button>
                )}
              </div>
            </form>
            <p className='text-center text-gray-500 text-xs'>
              &copy;2022 @bastian-g11. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
