import Image from 'next/image';
import design from '../public/img/design.png';
import code from '../public/img/code.png';
import consulting from '../public/img/consulting.png';

const CardContainer = () => {
  return (
    <div className='flex flex-col md:flex-row max-w-7xl gap-x-5 mx-auto mt-10'>
      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <Image src={design} width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='py-2'>
          Creating elegant designs suited for your needs following core design
          theory
        </p>
        <h4 className='py-4 text-teal-600'>Design tools I use</h4>
        <p className='text-gray-800 py-1'>Photoshop</p>
        <p className='text-gray-800 py-1'>Illustrator</p>
        <p className='text-gray-800 py-1'>Figma</p>
      </div>

      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <Image src={code} width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='py-2'>
          Creating elegant designs suited for your needs following core design
          theory
        </p>
        <h4 className='py-4 text-teal-600'>Design tools I use</h4>
        <p className='text-gray-800 py-1'>Photoshop</p>
        <p className='text-gray-800 py-1'>Illustrator</p>
        <p className='text-gray-800 py-1'>Figma</p>
      </div>

      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <Image src={consulting} width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='py-2'>
          Creating elegant designs suited for your needs following core design
          theory
        </p>
        <h4 className='py-4 text-teal-600'>Design tools I use</h4>
        <p className='text-gray-800 py-1'>Photoshop</p>
        <p className='text-gray-800 py-1'>Illustrator</p>
        <p className='text-gray-800 py-1'>Figma</p>
      </div>
    </div>
  );
};

export default CardContainer;
