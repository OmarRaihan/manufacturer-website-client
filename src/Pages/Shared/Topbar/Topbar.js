import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Topbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        {user ? (
          <button style={{ backgroundColor: "#36AE7C" }} onClick={logout} className="btn border-0 text-white">
            SignOut
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 border-b">
      <div className="navbar-start flex">
        <div className="w-52">
          <p style={{ color: "#36AE7C" }} className="btn btn-ghost normal-case font-bold text-3xl">
            <Link to="/home">MATRIX</Link>
          </p>
          {/* <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul> */}
        </div>
        <div className="btn btn-ghost normal-case hidden md:flex mx-auto">
          <p className="mr-6">Office: 0721-765640</p>
          <p>Mail: matrix@gmail.com</p>
          <div>
            <p className="ml-6">Login with: {user?.email}</p>
          </div>
        </div>
      </div>
      <div className="navbar-center ml-auto mr-10">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Topbar;
