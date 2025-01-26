import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <div className='max-w-7xl mx-auto my-8'>
      <h1 className='text-black font-medium text-3xl my-4'>
        Bài Viết
      </h1>
      <div className='grid grid-cols-3 gap-4'>
      <div className='relative overflow-hidden w-[360px] h-[225px] my-4'>
        <Image
          className="object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
          width={360}
          height={225}
          src="/images/artist_example.jpg"
          alt="logo"
        />
        <div className='absolute w-[360px]  top-1/2 text-center'>
          <p className='text-white font-medium text-2xl'>Sức Khỏe</p>
        </div>
      </div>
      <div className='relative overflow-hidden w-[360px] h-[225px]'>
        <Image
          className="object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
          width={360}
          height={225}
          src="/images/artist_example.jpg"
          alt="logo"
        />
        <div className='absolute w-[360px]  top-1/2 text-center'>
          <p className='text-white font-medium text-2xl'>Sức Khỏe</p>
        </div>
      </div>
      <div className='relative overflow-hidden w-[360px] h-[225px]'>
        <Image
          className="object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
          width={360}
          height={225}
          src="/images/artist_example.jpg"
          alt="logo"
        />
        <div className='absolute w-[360px]  top-1/2 text-center'>
          <p className='text-white font-medium text-2xl'>Sức Khỏe</p>
        </div>
      </div>
      <div className='relative overflow-hidden w-[360px] h-[225px]'>
        <Image
          className="object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
          width={360}
          height={225}
          src="/images/artist_example.jpg"
          alt="logo"
        />
        <div className='absolute w-[360px]  top-1/2 text-center'>
          <p className='text-white font-medium text-2xl'>Sức Khỏe</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Page;