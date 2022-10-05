import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <nav className='py-10 flex justify-between'>
      <h1 className='text-xl dark:text-gray-100'>Developed by Chris</h1>

      <ul className='flex items-center'>
        <li>
          <BsFillMoonStarsFill
            className='text-2xl cursor-pointer dark:text-gray-100'
            onClick={() => setDarkMode(!darkMode)}
          />
        </li>
        <li>
          <Link href='/'>
            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8'>
              Resume
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
