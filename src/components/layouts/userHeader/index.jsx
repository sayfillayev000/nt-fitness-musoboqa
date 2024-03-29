import React from "react";
import { Checkout, Bell, Settings } from "../../../assets/react-icons";
import { Profile } from "../../../assets/images/png";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../firebase/config";
import { getAuth, signOut } from "firebase/auth";


function index({ titlename = "Mijozlar" }) {
    const navigate = useNavigate();
  const signOutClick = () => {
    signOut(getAuth())
      .then(() => {console.log('ishladi'),navigate("/login")})
      .catch((e) => console.error(e.error,'error'));
  };
  return (
    <header>
      <div className="user-nick">{titlename}</div>
      <div className="user-instruction">
        <NavLink className={"_checkout"} to="/user/savat">
          <div className="checkout">
            <Checkout />
          </div>
        </NavLink>
        <div className="bell">
          <NavLink>
            <Bell />
          </NavLink>
        </div>
        <div className="settings">
          <NavLink>
            <Settings onClick={signOutClick} />
          </NavLink>
        </div>
        <div className="my_account">
          <div className="row align-items-end">
            <div className="col-7 row">
              <div className="col-12 name">John Doe</div>
              <div className="col-12 another">+9989360833334</div>
            </div>
            <div className="col-4 profile">
              <img src={Profile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default index;
