import Image from 'next/image';
import doom from '../public/img/doom.jpg';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='text-center p-10'>
      <h2 className='text-5xl py-2 text-teal-600 font-medium'>Chris Davis</h2>
      <h3 className='text-2xl py-2'>Developer and Designer.</h3>
      <p className='text-md py-5 leading-8 text-gray-800'>
        Freelancer providing services for programming needs. Join me below and
        let's get crackin'!
      </p>

      <div className='flex justify-center gap-16 text-5xl py-3 text-gray-600'>
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>

      <div className='relative w-[300px] h-[300px] overflow-hidden rounded-full mt-20 mx-auto'>
        <Image src={doom} layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};

export default Hero;
