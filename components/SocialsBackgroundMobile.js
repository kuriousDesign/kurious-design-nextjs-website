const SocialsBackgroundMobile = () => {

  const aspectSquare = {
    width: '100vw',
    height: '100vw',
  };

  const diameter = '300px';

  return (
    <div className="xl:hidden fixed bottom-0 left-0 h-[500px] w-full overflow-hidden z-10">
      <div className={`absolute left-1/2 transform -translate-x-1/2 top-full -translate-y-[50px] w-[310px] h-[60px] rounded-t-full backdrop-filter backdrop-blur-lg bg-opacity-30 bg-black`}>
        <svg className='filter backdrop-blur-sm opacity-60' width="350" height="200">
          <ellipse  cx="175" cy="100" rx="175" ry="100" fill="none" stroke="none" />
        </svg>
      </div>
    </div>
  );
}

export default SocialsBackgroundMobile;

