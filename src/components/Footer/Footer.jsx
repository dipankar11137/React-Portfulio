import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";


const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="footer">
      <img className="text-black" src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">

        <div className="f-icons">
          <a href="https://www.instagram.com/dipankar1234567/" target="_blank"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/dipankar.halder2/" target="_blank"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/dipankar11137" target="_blank"><Gitub color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/dipankar-halder-812147197/" target="_blank"><Linkdin color="white" size={"3rem"} /></a>
        </div>
        <div className="copyright-style">
          <p><small>Copyright &copy; {year}</small></p>
          <p><small>Develop By Dipankar Halder </small></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
