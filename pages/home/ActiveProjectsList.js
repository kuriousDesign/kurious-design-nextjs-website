import { FaBicycle, FaReact, FaSmile } from 'react-icons/fa';
import { GiCardJackSpades, GiGears } from "react-icons/gi";
import { TbFountainFilled } from "react-icons/tb";


const ActiveProjectsList = () => {
  const iconColor = "text-blue";
  return (
    <ul className="list-none">
      <li className="flex items-center">
        <GiGears className={`h-5 w-5 mr-2 ${iconColor}`} />
        motor control for automatic bicycle transmission
      </li>
      <li className="flex items-center">
        <FaReact className={`h-5 w-5 mr-2 ${iconColor}`}  />
        this website
      </li>
      <li className="flex items-center">
        <GiCardJackSpades className={`h-5 w-5 mr-2 ${iconColor}`} />
        interactive brand activation for Truth or Fate card game
      </li>
      <li className="flex items-center">
        <TbFountainFilled className={`h-5 w-5 mr-2 ${iconColor}`} />
        water fountain design for mother&apos;s zen room
      </li>
      <li className="flex items-center">
        <FaSmile className={`h-5 w-5 mr-2 ${iconColor}`} />
        {"your project ;)"}
      </li>
    </ul>
  );
};

export default ActiveProjectsList;
