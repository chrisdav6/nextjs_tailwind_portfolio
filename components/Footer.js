const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10 mt-10 md:flex-row md:justify-between dark:text-gray-100'>
      <div>Designed by Chris Davis - 2022</div>
      <div>
        Check out my Build on{' '}
        <a
          href='https://github.com/chrisdav6/nextjs_tailwind_portfolio'
          target='_blank'
          className='text-teal-500 hover:text-teal-200'
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
