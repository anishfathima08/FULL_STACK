import React, { useContext } from "react";
import { myAsset } from "../../assets/assets";
import { Link } from "react-router-dom";
import { myContext } from "../../Context/ContextProvider";

const Navbar = () => {

  const { logoutFun } = useContext(myContext)

  return (
    <>
      <div className="d-flex justify-content-between align-items-center px-5 py-3">
        <img src={myAsset.logo} alt="" height="30px" />
        <div className="d-flex gap-5">
          <Link to="/home" className="text-decoration-none text-dark">
            Home
          </Link>
          <Link to="/home" className="text-decoration-none text-dark">
            About
          </Link>
          <Link to="/home" className="text-decoration-none text-dark">
            Contact
          </Link>
          <Link to="/shop" className="text-decoration-none text-dark">
            Shop
          </Link>
        </div>
        <div className="icon d-flex align-items-center gap-3">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-shopping-cart"></i>
          <button className='btn btn-danger' onClick={logoutFun}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
