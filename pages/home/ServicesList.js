import { FaBicycle, FaReact, FaSmile } from 'react-icons/fa';
import { GiCardJackSpades, GiGears } from "react-icons/gi";
import { TbFountainFilled } from "react-icons/tb";


const ServicesList = () => {
  const iconColor = "text-blue";
  return (
    <ul className="list-none text-sm xl:text-xl hidden xl:block">
      <li className="flex items-center">
        <GiGears className={`h-5 w-5 mr-2 ${iconColor}`} />
        interactive design/immersive art/creative technology
      </li>
      <li className="flex items-center">
        <FaReact className={`h-5 w-5 mr-2 ${iconColor}`}  />
        WebDev/React/Next.js/Node.js/Express.js
      </li>
      <li className="flex items-center">
        <GiCardJackSpades className={`h-5 w-5 mr-2 ${iconColor}`} />
        UI/HMI for controlling machines/robotics
      </li>
      <li className="flex items-center">
        <TbFountainFilled className={`h-5 w-5 mr-2 ${iconColor}`} />
        mechatronics design/ system integration/ control system programming
      </li>

    </ul>
  );
};

export default ServicesList;
