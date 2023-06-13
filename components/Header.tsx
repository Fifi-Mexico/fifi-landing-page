import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8'>
          <div className='relative z-10 flex items-center gap-16'>
            <Link aria-label='Home' href='/'>
              <Image src='/assets/static/original.png' alt='logo' width={80} height={80} />
            </Link>
          </div>
          <div className='flex items-center gap-6'>
            <div className='lg:hidden' data-headlessui-state=''>
              <button
                className='relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&amp;:not(:focus-visible)]:focus:outline-none'
                aria-label='Toggle site navigation'
                type='button'
                aria-expanded='false'
                data-headlessui-state=''
                id='headlessui-popover-button-:R2p6:'
                onClick={() => setIsOpen(!isOpen)}>
                <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' className='h-6 w-6'>
                  <path d='M5 6h14M5 18h14M5 12h14' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path>
                </svg>
              </button>
              {isOpen ? (
                <>
                  <div
                    className='fixed inset-0 z-0 bg-gray-300/60 backdrop-blur'
                    id='headlessui-popover-overlay-:r1g:'
                    aria-hidden='true'
                    data-headlessui-state='open'
                    style={{ opacity: '1' }}
                    data-projection-id='9'></div>
                  <div
                    className='absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20'
                    id='headlessui-popover-panel-:r1h:'
                    tabIndex={-1}
                    data-headlessui-state='open'
                    style={{ opacity: '1', transform: 'none' }}
                    data-projection-id='10'>
                    <div className='flex flex-col gap-4'>
                      <a
                        className='inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80'
                        href='/#'>
                        Descargar la aplicación
                      </a>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <a
              className='inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 hidden lg:block'
              href='#'>
              Descargar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
