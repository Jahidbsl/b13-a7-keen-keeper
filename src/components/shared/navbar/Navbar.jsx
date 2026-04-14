import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import navLogo from "@/assets/logo.png";
import { IoMdHome, IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";


const Navbar = () => {
  const navLinks = [
    { logo: <IoMdHome />, label: "Home", href: "/" },
    { logo: <IoMdTime />, label: "Timeline", href: "/timeline" },
    { logo: <ImStatsDots />, label: "Stats", href: "/stats" },
  ];
  return (
    <header className="border-b border-base-300">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link, index) => (
                <NavLink key={index} link={link}></NavLink>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image src={navLogo} alt="Logo" height={150} width={150} />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks.map((link, index) => (
              <NavLink key={index} link={link}></NavLink>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
