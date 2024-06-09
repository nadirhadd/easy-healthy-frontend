import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const UserButton = () => {
  return (
    <div className="bg-accent rounded-[8px] font-mont font-semibold cursor-pointer">
      <NavLink to={(Link.path = "/login")}>
        <h1 className="py-[5px] px-[25px]">
          User <FontAwesomeIcon icon={faUser} />
        </h1>
      </NavLink>
    </div>
  );
};

export default UserButton;
