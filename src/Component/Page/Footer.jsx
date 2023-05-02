import React from "react";
import logo from "/public/dragon.png"
const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-base-content mt-10">
      <div className="text-white">
        <img className= " " src={logo} alt="" />
        <h1 className="text-2xl font-bold">Dragons Kitchen</h1>
        <p>
          Providing reliable service since 1992
        </p>
      </div>
      <div className="text-white">
        <span className="footer-title">Services</span>
        <a className="link link-hover">Menu</a>
        <a className="link link-hover">Dining</a>
        <a className="link link-hover">Event</a>
      </div >
      <div className="text-white">
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </div>
      <div className="text-white">
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
