import React from 'react';

const SecondaryFeatures = () => {
  return (
    <section id='secondary-features' aria-label='Features for building a portfolio' className='py-20 sm:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='font-poppins text-3xl font-medium tracking-tight text-gray-900'>
            Descubre nuevas formas para enriquecer tu experiencia en restaurantes.
          </h2>
          <p className='mt-2 text-lg text-gray-600'>
            Explora funciones adicionales que te brindarán aún más comodidad y disfrute durante tus visitas a
            restaurantes.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'>
          <li className='rounded-2xl border border-gray-200 p-8'>
            <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
                fill='#737373'></path>
              <path d='M12 25l8-8m0 0h-6m6 0v6' stroke='#171717' strokeWidth='2' strokeLinecap='round'></path>
              <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
            </svg>
            <h3 className='mt-6 font-semibold text-gray-900'>Valoraciones y reseñas</h3>
            <p className='mt-2 text-gray-700'>Comparte tus opiniones para mejorar tu experiencia.</p>
          </li>
          <li className='rounded-2xl border border-gray-200 p-8'>
            <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
                fill='#737373'></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z'
                fill='url(#:R1adm:-gradient)'></path>
              <rect x='9' y='6' width='14' height='4' rx='1' fill='#171717'></rect>
              <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
              <defs>
                <linearGradient id=':R1adm:-gradient' x1='16' y1='12' x2='16' y2='28' gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#737373'></stop>
                  <stop offset='1' stopColor='#737373' stopOpacity='0'></stop>
                </linearGradient>
              </defs>
            </svg>
            <h3 className='mt-6 font-semibold text-gray-900'>Menús especiales</h3>
            <p className='mt-2 text-gray-700'>
              Explora menús para dietas específicas, como vegetarianos, veganos, entre otros.
            </p>
          </li>
          <li className='rounded-2xl border border-gray-200 p-8'>
            <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
              <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z'
                fill='#737373'></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z'
                fill='#171717'></path>
            </svg>
            <h3 className='mt-6 font-semibold text-gray-900'>Recomendaciones personalizadas</h3>
            <p className='mt-2 text-gray-700'>
              Descubre nuevos platos basados en tus preferencias y elecciones anteriores.
            </p>
          </li>
          <li className='rounded-2xl border border-gray-200 p-8'>
            <svg viewBox='0 0 32 32' fill='none' aria-hidden='true' className='h-8 w-8'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
                fill='#737373'></path>
              <circle cx='11' cy='14' r='2' fill='#171717'></circle>
              <circle cx='11' cy='20' r='2' fill='#171717'></circle>
              <circle cx='11' cy='26' r='2' fill='#171717'></circle>
              <path d='M16 14h6M16 20h6M16 26h6' stroke='#737373' strokeWidth='2' strokeLinecap='square'></path>
              <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
            </svg>
            <h3 className='mt-6 font-semibold text-gray-900'>Notificaciones en tiempo real</h3>
            <p className='mt-2 text-gray-700'>
              Mantente informado sobre el estado de tu pedido y actualizaciones especiales del restaurante.
            </p>
          </li>
          <li className='rounded-2xl border border-gray-200 p-8'>
            <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
              <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z'
                fill='#737373'></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z'
                fill='#171717'></path>
            </svg>
            <h3 className='mt-6 font-semibold text-gray-900'>Compartir en redes sociales</h3>
            <p className='mt-2 text-gray-700'>
              Comparte tus momentos gastronómicos en redes sociales con facilidad directamente desde la aplicación.
            </p>
          </li>
          <li className='rounded-2xl border border-gray-200 p-8'>
            <svg viewBox='0 0 32 32' fill='none' aria-hidden='true' className='h-8 w-8'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
                fill='#737373'></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z'
                fill='#171717'></path>
              <path d='M10 12h12' stroke='#737373' strokeWidth='2' strokeLinecap='square'></path>
              <circle cx='16' cy='16' r='16' fill='#A3A3A3' fillOpacity='0.2'></circle>
            </svg>
            <h3 className='mt-6 font-semibold text-gray-900'>Menús temáticos</h3>
            <p className='mt-2 text-gray-700'>
              Descubre menús especiales para ocasiones especiales, como festividades o celebraciones.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SecondaryFeatures;
