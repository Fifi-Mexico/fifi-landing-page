import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const Features = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeFeature, setActiveFeature] = useState({ feature1: true, feature2: false, feature3: false });
  const [activeFeatureScreenshot, setActiveFeatureScreenshot] = useState('/assets/static/screenshot-02.png');

  useEffect(() => {
    // Populate itemRefs with refs to each carousel item
    itemRefs.current = itemRefs.current.slice(0, 3); // Adjust the number based on the number of items in your carousel
  }, []);

  useEffect(() => {
    const carouselElement = carouselRef.current;

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        const itemIndex = itemRefs.current.indexOf(target as HTMLDivElement);

        if (entry.isIntersecting) {
          setActiveItemIndex(itemIndex);
        }
      });
    };

    const options: IntersectionObserverInit = {
      threshold: 0.5, // Adjust this threshold based on your needs
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    itemRefs.current.forEach((itemRef) => {
      if (itemRef) {
        observer.observe(itemRef);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleFeature = (feature: string) => {
    switch (feature) {
      case 'feature1':
        setActiveFeature({ feature1: true, feature2: false, feature3: false });
        setActiveFeatureScreenshot('/assets/static/screenshot-02.png');
        break;
      case 'feature2':
        setActiveFeature({ feature1: false, feature2: true, feature3: false });
        setActiveFeatureScreenshot('/assets/static/screenshot-03.png');
        break;
      case 'feature3':
        setActiveFeature({ feature1: false, feature2: false, feature3: true });
        setActiveFeatureScreenshot('/assets/static/screenshot-04.png');
        break;
      default:
        break;
    }
  };

  return (
    <section id='features' aria-label='Features for investing all your money' className='bg-gray-900 py-20 sm:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl'>
          <h2 className='font-poppins text-3xl font-medium tracking-tight text-white'>
            Potentes funciones para transformar tu experiencia.
          </h2>
          <p className='mt-2 text-lg text-gray-400'>
            La aplicación móvil fue construida para que te permita ordenar y disfrutar de tus comidas favoritas con
            facilidad. Simplifica el proceso de pedidos, ahorra tiempo y vive una experiencia sin complicaciones en los
            restaurantes.
          </p>
        </div>
      </div>
      {/* Features Mobile */}
      <div className='mt-16 md:hidden' ref={carouselRef}>
        <div className='-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&amp;::-webkit-scrollbar]:hidden'>
          <div ref={(ref) => (itemRefs.current[0] = ref)} className='w-full flex-none snap-center px-4 sm:px-6'>
            <div className='relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6'>
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <svg
                  className='animate-spin-slower'
                  viewBox='0 0 558 558'
                  width='558'
                  height='558'
                  fill='none'
                  aria-hidden='true'>
                  <defs>
                    <linearGradient id=':R2m9m:' x1='79' y1='16' x2='105' y2='237' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#FF7A00'></stop>
                      <stop offset='1' stopColor='#FF7A00' stopOpacity='0'></stop>
                    </linearGradient>
                  </defs>
                  <path
                    opacity='.2'
                    d='M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z'
                    stroke='#FF7A00'></path>
                  <path d='M1 279C1 125.465 125.465 1 279 1' stroke='url(#:R2m9m:)' strokeLinecap='round'></path>
                </svg>
              </div>
              <div className='relative aspect-[366/729] relative mx-auto w-full max-w-[366px]'>
                <div className='absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl'></div>
                <Image
                  className='absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900'
                  src='/assets/static/screenshot-02.png'
                  alt=''
                  loading='lazy'
                  decoding='async'
                  width={1000}
                  height={1000}
                />
                <Image
                  className='pointer-events-none absolute inset-0 h-full w-full'
                  src='/assets/static/iphone-frame.png'
                  alt=''
                  loading='lazy'
                  decoding='async'
                  data-nimg='1'
                  style={{ color: 'transparent' }}
                  width={366}
                  height={729}
                />
              </div>
              <div className='absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10'>
                <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
                  <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z'
                    fill='#737373'></path>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z'
                    fill='#A3A3A3'></path>
                </svg>
                <h3 className='mt-6 text-sm font-semibold text-white sm:text-lg'>Ordena sin esperas ni errores</h3>
                <p className='mt-2 text-sm text-gray-400'>
                  Realiza tus pedidos directamente desde tu dispositivo móvil. Personaliza tus elecciones, elige
                  opciones de preparación y asegúrate de que tu pedido llegue tal como lo deseas.
                </p>
              </div>
            </div>
          </div>
          <div ref={(ref) => (itemRefs.current[1] = ref)} className='w-full flex-none snap-center px-4 sm:px-6'>
            <div className='relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6'>
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <svg
                  className='animate-spin-reverse-slower'
                  viewBox='0 0 558 558'
                  width='558'
                  height='558'
                  fill='none'
                  aria-hidden='true'>
                  <defs>
                    <linearGradient id=':R369m:' x1='79' y1='16' x2='105' y2='237' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#FF7A00'></stop>
                      <stop offset='1' stopColor='#FF7A00' stopOpacity='0'></stop>
                    </linearGradient>
                  </defs>
                  <path
                    opacity='.2'
                    d='M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z'
                    stroke='#FF7A00'></path>
                  <path d='M1 279C1 125.465 125.465 1 279 1' stroke='url(#:R369m:)' strokeLinecap='round'></path>
                </svg>
              </div>
              <div className='relative aspect-[366/729] relative mx-auto w-full max-w-[366px]'>
                <div className='absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl'></div>
                <Image
                  className='absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900'
                  src='/assets/static/screenshot-03.png'
                  alt=''
                  loading='lazy'
                  decoding='async'
                  width={1000}
                  height={1000}
                />
                <Image
                  className='pointer-events-none absolute inset-0 h-full w-full'
                  src='/assets/static/iphone-frame.png'
                  alt=''
                  loading='lazy'
                  decoding='async'
                  data-nimg='1'
                  style={{ color: 'transparent' }}
                  width={366}
                  height={729}
                />
              </div>
              <div className='absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10'>
                <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
                  <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
                    fill='#A3A3A3'></path>
                  <path d='M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z' fill='#737373'></path>
                </svg>
                <h3 className='mt-6 text-sm font-semibold text-white sm:text-lg'>Explora y elige con confianza</h3>
                <p className='mt-2 text-sm text-gray-400'>
                  Te ofrecemos una experiencia de navegación fluida y amigable para que descubras los platos más
                  tentadores del menú. Explora fotos, descripciones y precios sin esfuerzo.
                </p>
              </div>
            </div>
          </div>
          <div ref={(ref) => (itemRefs.current[2] = ref)} className='w-full flex-none snap-center px-4 sm:px-6'>
            <div className='relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6'>
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <svg viewBox='0 0 558 558' width='558' height='558' fill='none' aria-hidden='true'>
                  <defs>
                    <linearGradient id=':R3m9m:' x1='79' y1='16' x2='105' y2='237' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#13B5C8'></stop>
                      <stop offset='1' stopColor='#13B5C8' stopOpacity='0'></stop>
                    </linearGradient>
                  </defs>
                  <path
                    opacity='.2'
                    d='M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z'
                    stroke='#13B5C8'></path>
                  <path d='M1 279C1 125.465 125.465 1 279 1' stroke='url(#:R3m9m:)' strokeLinecap='round'></path>
                </svg>
              </div>
              <div className='relative aspect-[366/729] relative mx-auto w-full max-w-[366px]'>
                <div className='absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl'></div>
                <Image
                  className='absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900'
                  src='/assets/static/screenshot-04.png'
                  alt=''
                  loading='lazy'
                  decoding='async'
                  width={1000}
                  height={1000}
                />
                <Image
                  className='pointer-events-none absolute inset-0 h-full w-full'
                  src='/assets/static/iphone-frame.png'
                  alt=''
                  loading='lazy'
                  decoding='async'
                  data-nimg='1'
                  style={{ color: 'transparent' }}
                  width={366}
                  height={729}
                />
              </div>
              <div className='absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10'>
                <svg viewBox='0 0 32 32' fill='none' aria-hidden='true' className='h-8 w-8'>
                  <defs>
                    <linearGradient
                      id=':Rfm9m:-gradient'
                      x1='14'
                      y1='14.5'
                      x2='7'
                      y2='17'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#737373'></stop>
                      <stop offset='1' stopColor='#D4D4D4' stopOpacity='0'></stop>
                    </linearGradient>
                  </defs>
                  <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z'
                    fill='#A3A3A3'></path>
                  <path
                    d='M7 22c0-4.694 3.5-8 8-8'
                    stroke='url(#:Rfm9m:-gradient)'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z'
                    fill='#A3A3A3'></path>
                </svg>
                <h3 className='mt-6 text-sm font-semibold text-white sm:text-lg'>Paga con tranquilidad</h3>
                <p className='mt-2 text-sm text-gray-400'>
                  Olvida las esperas para recibir la cuenta. Paga de forma rápida y segura. Divide la cuenta fácilmente
                  y disfruta de un proceso de pago sin inconvenientes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 flex justify-center gap-3'>
          <button
            type='button'
            className={`relative h-0.5 w-4 rounded-full ${activeItemIndex === 0 ? 'bg-gray-300' : 'bg-gray-500'}`}
            aria-label='Go to slide 1'>
            <span className='absolute -inset-x-1.5 -inset-y-3'></span>
          </button>
          <button
            type='button'
            className={`relative h-0.5 w-4 rounded-full ${activeItemIndex === 1 ? 'bg-gray-300' : 'bg-gray-500'}`}
            aria-label='Go to slide 2'>
            <span className='absolute -inset-x-1.5 -inset-y-3'></span>
          </button>
          <button
            type='button'
            className={`relative h-0.5 w-4 rounded-full ${activeItemIndex === 2 ? 'bg-gray-300' : 'bg-gray-500'}`}
            aria-label='Go to slide 3'>
            <span className='absolute -inset-x-1.5 -inset-y-3'></span>
          </button>
        </div>
      </div>
      {/* Features Desktop */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden md:mt-20 md:block'>
        <div className='grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24'>
          <div className='relative z-10 order-last col-span-6 space-y-6' role='tablist' aria-orientation='vertical'>
            <div className='relative rounded-2xl transition-colors hover:bg-gray-800/30'>
              {activeFeature.feature1 ? (
                <div
                  className='absolute inset-0 bg-gray-800'
                  style={{ borderRadius: '3.33333% / 6.89655%', transform: 'none', transformOrigin: '50% 50% 0px' }}
                  data-projection-id='46'></div>
              ) : null}
              <div className='relative z-10 p-8'>
                <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
                  <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z'
                    fill='#737373'></path>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z'
                    fill='#A3A3A3'></path>
                </svg>
                <h3 className='mt-6 text-lg font-semibold text-white'>
                  <button
                    className='text-left [&amp;:not(:focus-visible)]:focus:outline-none'
                    role='tab'
                    type='button'
                    aria-selected={activeFeature.feature1}
                    tabIndex={activeFeature.feature1 ? 0 : -1}
                    onClick={() => handleFeature('feature1')}>
                    <span className='absolute inset-0 rounded-2xl'></span>Ordena sin esperas ni errores
                  </button>
                </h3>
                <p className='mt-2 text-sm text-gray-400'>
                  Realiza tus pedidos directamente desde tu dispositivo móvil. Personaliza tus elecciones, elige
                  opciones de preparación y asegúrate de que tu pedido llegue tal como lo deseas.
                </p>
              </div>
            </div>
            <div className='relative rounded-2xl transition-colors hover:bg-gray-800/30'>
              {activeFeature.feature2 ? (
                <div
                  className='absolute inset-0 bg-gray-800'
                  style={{ borderRadius: '3.33333% / 6.89655%', transform: 'none', transformOrigin: '50% 50% 0px' }}
                  data-projection-id='46'></div>
              ) : null}
              <div className='relative z-10 p-8'>
                <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
                  <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
                    fill='#A3A3A3'></path>
                  <path d='M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z' fill='#737373'></path>
                </svg>
                <h3 className='mt-6 text-lg font-semibold text-white'>
                  <button
                    className='text-left [&amp;:not(:focus-visible)]:focus:outline-none'
                    role='tab'
                    type='button'
                    aria-selected={activeFeature.feature2}
                    tabIndex={activeFeature.feature2 ? 0 : -1}
                    onClick={() => handleFeature('feature2')}>
                    <span className='absolute inset-0 rounded-2xl'></span>Explora y elige con confianza
                  </button>
                </h3>
                <p className='mt-2 text-sm text-gray-400'>
                  Te ofrecemos una experiencia de navegación fluida y amigable para que descubras los platos más
                  tentadores del menú. Explora fotos, descripciones y precios sin esfuerzo.
                </p>
              </div>
            </div>
            <div className='relative rounded-2xl transition-colors hover:bg-gray-800/30'>
              {activeFeature.feature3 ? (
                <div
                  className='absolute inset-0 bg-gray-800'
                  style={{ borderRadius: '3.33333% / 6.89655%', transform: 'none', transformOrigin: '50% 50% 0px' }}
                  data-projection-id='46'></div>
              ) : null}
              <div className='relative z-10 p-8'>
                <svg viewBox='0 0 32 32' fill='none' aria-hidden='true' className='h-8 w-8'>
                  <defs>
                    <linearGradient
                      id=':R1mr9m:-gradient'
                      x1='14'
                      y1='14.5'
                      x2='7'
                      y2='17'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#737373'></stop>
                      <stop offset='1' stopColor='#D4D4D4' stopOpacity='0'></stop>
                    </linearGradient>
                  </defs>
                  <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z'
                    fill='#A3A3A3'></path>
                  <path
                    d='M7 22c0-4.694 3.5-8 8-8'
                    stroke='url(#:R1mr9m:-gradient)'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z'
                    fill='#A3A3A3'></path>
                </svg>
                <h3 className='mt-6 text-lg font-semibold text-white'>
                  <button
                    className='text-left [&amp;:not(:focus-visible)]:focus:outline-none'
                    role='tab'
                    type='button'
                    aria-selected={activeFeature.feature3}
                    tabIndex={activeFeature.feature3 ? 0 : -1}
                    onClick={() => handleFeature('feature3')}>
                    <span className='absolute inset-0 rounded-2xl'></span>Paga con tranquilidad
                  </button>
                </h3>
                <p className='mt-2 text-sm text-gray-400'>
                  Olvida las esperas para recibir la cuenta. Paga de forma rápida y segura. Divide la cuenta fácilmente
                  y disfruta de un proceso de pago sin inconvenientes.
                </p>
              </div>
            </div>
          </div>
          <div className='relative col-span-6'>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <svg
                viewBox='0 0 558 558'
                width='558'
                height='558'
                fill='none'
                aria-hidden='true'
                className='animate-spin-slower'>
                <defs>
                  <linearGradient id=':R3b9m:' x1='79' y1='16' x2='105' y2='237' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#FF7A00'></stop>
                    <stop offset='1' stopColor='#FF7A00' stopOpacity='0'></stop>
                  </linearGradient>
                </defs>
                <path
                  opacity='.2'
                  d='M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z'
                  stroke='#FF7A00'></path>
                <path d='M1 279C1 125.465 125.465 1 279 1' stroke='url(#:R3b9m:)' strokeLinecap='round'></path>
              </svg>
            </div>
            <div className='relative aspect-[366/729] z-10 mx-auto w-full max-w-[366px]'>
              <div className='absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)]'></div>
              <Image
                className='absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900'
                src={activeFeatureScreenshot}
                alt=''
                width={1000}
                height={1000}
              />
              <Image
                className='pointer-events-none absolute inset-0 h-full w-full'
                src='/assets/static/iphone-frame.png'
                alt=''
                loading='lazy'
                decoding='async'
                data-nimg='1'
                style={{ color: 'transparent' }}
                width={366}
                height={729}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
