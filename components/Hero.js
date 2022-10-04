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
        <a href='https://www.twitter.com' target='_blank'>
          <AiFillTwitterCircle className='relative hover:scale-125 hover:text-blue-500 ease-in-out hover:duration-1000' />
        </a>
        <a href='https://www.linkedin.com' target='_blank'>
          <AiFillLinkedin className='relative hover:scale-125 hover:text-[#0e76a8] ease-in-out hover:duration-1000' />
        </a>
        <a href='https://www.youtube.com' target='_blank'>
          <AiFillYoutube className='relative hover:scale-125 hover:text-[#ff0000] ease-in-out hover:duration-1000' />
        </a>
      </div>

      <div className='relative w-[300px] h-[300px] overflow-hidden rounded-full mt-20 mx-auto'>
        <Image src={doom} layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};

export default Hero;
