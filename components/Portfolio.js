import Image from 'next/image';
import web1 from '../public/img/web1.png';
import web2 from '../public/img/web2.png';
import web3 from '../public/img/web3.png';
import web4 from '../public/img/web4.png';
import web5 from '../public/img/web5.png';
import web6 from '../public/img/web6.png';

const Portfolio = () => {
  return (
    <div className='max-w-5xl mt-10 mx-auto md:text-center'>
      <h3 className='text-3xl py-1'>Portfolio</h3>
      <p className='text-md py-2 leading-8 text-gray-800'>
        Since the beginning of my journey as a freelance designer and devloper,
        I've done remote work for{' '}
        <span className='text-teal-500'> agencies </span> consulted for{' '}
        <span className='text-teal-500'> startups </span> and collaborated with
        talented people to create digital products for both business and
        consumer use.
      </p>
      <p className='text-md py-2 leading-8 text-gray-800'>
        I offer a wide range of services, including brand design, programming
        and teaching.
      </p>

      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className='basis-1/3 flex-1'>
          <Image
            src={web1}
            className='rounded-lg object-cover'
            width='100%'
            height='100%'
            layout='responsive'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <Image
            src={web2}
            className='rounded-lg object-cover'
            width='100%'
            height='100%'
            layout='responsive'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <Image
            src={web3}
            className='rounded-lg object-cover'
            width='100%'
            height='100%'
            layout='responsive'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <Image
            src={web4}
            className='rounded-lg object-cover'
            width='100%'
            height='100%'
            layout='responsive'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <Image
            src={web5}
            className='rounded-lg object-cover'
            width='100%'
            height='100%'
            layout='responsive'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <Image
            src={web6}
            className='rounded-lg object-cover'
            width='100%'
            height='100%'
            layout='responsive'
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
