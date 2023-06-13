import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='border-t border-gray-200'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16'>
          <div>
            <div className='flex items-center text-gray-900'>
              <Image src='/assets/static/original.png' alt='logo' width={80} height={80} />
              <div className='ml-4'>
                <p className='text-base font-semibold'>Fifi</p>
                <p className='mt-1 text-sm'>Mejore su experiencia en restaurantes.</p>
              </div>
            </div>
            <nav className='mt-11 flex gap-8'>
              <a
                className='relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]'
                href='/#features'>
                <span className='relative z-10'>Características</span>
              </a>
              <a
                className='relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]'
                href='/cultura'>
                <span className='relative z-10'>Cultura</span>
              </a>
              {/* <a
                className='relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]'
                href='/#pricing'>
                <span className='relative z-10'>Pricing</span>
              </a>
              <a
                className='relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]'
                href='/#faqs'>
                <span className='relative z-10'>FAQs</span>
              </a> */}
            </nav>
          </div>
          {/* <div className='group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6'>
            <div className='relative flex h-24 w-24 flex-none items-center justify-center'>
              <svg
                viewBox='0 0 96 96'
                fill='none'
                aria-hidden='true'
                className='absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500'>
                <path
                  d='M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8'
                  strokeWidth='2'
                  strokeLinecap='round'></path>
              </svg>
              <img
                alt=''
                loading='lazy'
                decoding='async'
                data-nimg='1'
                style={{ color: 'transparent' }}
                src='/_next/static/media/qr-code.9c4a9a95.svg'
                width='80'
                height='80'
              />
            </div>
            <div className='ml-8 lg:w-64'>
              <p className='text-base font-semibold text-gray-900'>
                <a href='/#'>
                  <span className='absolute inset-0 sm:rounded-2xl'></span>Download the app
                </a>
              </p>
              <p className='mt-1 text-sm text-gray-700'>Scan the QR code to download the app from the App Store.</p>
            </div>
          </div> */}
        </div>
        <div className='flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6'>
          {/* <form className='flex w-full justify-center md:w-auto'>
            <div className='w-60 min-w-0 shrink'>
              <input
                type='email'
                aria-label='Correo electrónico'
                placeholder='Correo electrónico'
                autoComplete='email'
                required={true}
                className='block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm'
              />
            </div>
            <button
              className='inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-orange-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-orange-600 active:text-white/80 before:transition-colors ml-4 flex-none'
              type='submit'>
              <span className='hidden lg:inline'>Únete a la lista</span>
              <span className='lg:hidden'>Unirse a la lista</span>
            </button>
          </form> */}
          <p className='mt-6 text-sm text-gray-500 md:mt-0'>
            © Copyright {new Date().getFullYear()}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
