import React from "react";
import { Link } from "react-router-dom";
import '../Style.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
     <div className="navbar p-3" data-aos="fade-down">
      <span>MOIVEHUB</span>
      <div>
        <Link className="link" to='/login'>Login /</Link>
        <Link className="link" to='/signup'>Sign Up</Link>
      </div>
     </div>
  );
};

export default Header;
