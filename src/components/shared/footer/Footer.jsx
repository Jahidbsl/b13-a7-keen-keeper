import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="h-96 w-full bg-[#244D3F] text-white flex flex-col items-center justify-center space-y-2 ">
      <h1 className="text-6xl font-bold">KeenKeeper</h1>
      <p>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <h3 className="font-semibold text-2xl">Social Links</h3>
      <div className="inline-flex gap-3 ">
        <span className="bg-white rounded-full w-9 h-9 relative ">
            <RiInstagramFill color="#244D3F" size={20} className="absolute top-2 left-2"></RiInstagramFill>
        </span>
        <span className="bg-white rounded-full w-9 h-9 relative ">
            <FaFacebookSquare color="#244D3F" size={20} className="absolute top-2 left-2"></FaFacebookSquare>
        </span>
        <span className="bg-white rounded-full w-9 h-9 relative ">
            <FaXTwitter color="#244D3F" size={20} className="absolute top-2 left-2"></FaXTwitter>
        </span>
      </div>

      <div className="w-7xl pt-5 mt-15 mx-auto border-t border-gray-500 flex justify-between items-center">
        <div>
            <h4>© 2026 KeenKeeper. All rights reserved.</h4>
        </div>
        <div>
            <ul className="inline-flex gap-4">
                <li> Privacy Policy </li>
                <li> Terms of Service </li>
                <li> Cookies </li>
            </ul>
                                
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
