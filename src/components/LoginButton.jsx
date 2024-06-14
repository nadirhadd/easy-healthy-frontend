import { Link, NavLink } from "react-router-dom";

const LoginButton = ({ user }) => {
  return (
    <div className="bg-accent rounded-[8px] font-mont font-semibold cursor-pointer">
      {user ? (
        <h1 className="py-[5px] px-[25px]">Hello, {user.name}</h1>
      ) : (
        <NavLink to='/login'>
          <h1 className="py-[5px] px-[25px]">Login</h1>
        </NavLink>
      )}
    </div>
  );
};

export default LoginButton;
