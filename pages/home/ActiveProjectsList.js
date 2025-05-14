import { FaBicycle, FaReact, FaSmile, FaAmazon, FaMusic} from 'react-icons/fa';
import { GiCardJackSpades, GiGears } from "react-icons/gi";
import { TbFountainFilled } from "react-icons/tb";


const ActiveProjectsList = () => {
  const iconColor = "text-white";
  const size = "h-8 w-8 mr-6";
  return (
    <div className="ml-4 flex flex-col gap-8 text-left text-sm xl:text-md xl:text-base justify-left">
      <li className="flex items-start ">
        <FaAmazon className={`${size} ${iconColor}`}  />
        robotics controls for amazon robotics
      </li>

      <li className="flex items-start  ">
        <FaMusic className={`${size} ${iconColor} `}  />
        lighting controls and UI dev for Conor Byrne Music Co-op
      </li>
     
      <li className="flex items-start  ">
        <FaBicycle className={`${size} ${iconColor} `}  />
        motor control for automatic bicycle transmission
      </li>
      <li className="flex items-start">
        <FaReact className={`${size} ${iconColor}`}  />
        this website
      </li>
      <li className="flex items-start ">
        <GiCardJackSpades className={`${size} ${iconColor}`}  />
        interactive web dev for card game creator
      </li>
      <li className="flex items-start">
        <TbFountainFilled className={`${size} ${iconColor}`}  />
        landscape design for father&apos;s bonsai creek with waterfall
      </li>
      <li className="flex items-start">
        <FaSmile className={`${size} ${iconColor}`}  />
        {"your project ;)"}
      </li>
    </div>
  );
};

export default ActiveProjectsList;
