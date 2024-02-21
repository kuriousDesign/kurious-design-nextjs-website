const HeaderBackgroundMobile = () => {

  const aspectSquare = {
    width: '100vw',
    height: '100vw',
  };

  const diameter = "100";

  return (
    <div className="xl:hidden fixed top-0 left-0 h-1/3 w-full overflow-hidden z-0">
      <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-full translate-y-[110px] w-[500vw] h-[500vw] rounded-full backdrop-filter backdrop-blur-lg bg-opacity-30 bg-black`}>
        {/* Smaller semicircle */}

      </div>
    </div>
  );
}

export default HeaderBackgroundMobile;