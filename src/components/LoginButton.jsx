import { Link, NavLink } from "react-router-dom";

const LoginButton = () => {
  return (
    <div className="bg-accent rounded-[8px] font-mont font-semibold cursor-pointer">
      <NavLink to={(Link.path = "/login")}>
        <h1 className="py-[5px] px-[25px]">Login</h1>
      </NavLink>
    </div>
  );
};

export default LoginButton;
