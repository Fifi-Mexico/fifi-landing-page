import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8'>
          <div className='relative z-10 flex items-center gap-16'>
            <a aria-label='Home' href='/'>
              <Image src='/assets/static/original.png' alt='logo' width={80} height={80} />
            </a>
          </div>
          <div className='flex items-center gap-6'>
            <div className='lg:hidden' data-headlessui-state=''>
              <button
                className='relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&amp;:not(:focus-visible)]:focus:outline-none'
                aria-label='Toggle site navigation'
                type='button'
                aria-expanded='false'
                data-headlessui-state=''
                id='headlessui-popover-button-:R2p6:'>
                <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' className='h-6 w-6'>
                  <path d='M5 6h14M5 18h14M5 12h14' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path>
                </svg>
              </button>
            </div>
            <a
              className='inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 hidden lg:block'
              href='/#'>
              Descargar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
