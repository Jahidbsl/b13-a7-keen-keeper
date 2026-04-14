import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
   <div className="min-h-[24rem] w-full bg-[#244D3F] text-white flex flex-col items-center text-center justify-center p-8 space-y-6">
  
  <div className="space-y-2">
    <h1 className="text-5xl md:text-6xl font-bold">KeenKeeper</h1>
    <p className="max-w-lg mx-auto text-sm md:text-base px-4">
      Your personal shelf of meaningful connections. Browse, tend, and nurture
      the relationships that matter most.
    </p>
  </div>

 
  <div className="flex flex-col items-center gap-3">
    <h3 className="font-semibold text-xl md:text-2xl">Social Links</h3>
    <div className="flex gap-4">
      <span className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
        <RiInstagramFill color="#244D3F" size={22} />
      </span>
      <span className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
        <FaFacebookSquare color="#244D3F" size={22} />
      </span>
      <span className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
        <FaXTwitter color="#244D3F" size={22} />
      </span>
    </div>
  </div>

  
  <div className="w-full max-w-7xl pt-8 mt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
    <div>
      <h4>© 2026 KeenKeeper. All rights reserved.</h4>
    </div>
    <nav>
      <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
        <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
        <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
        <li className="hover:text-white cursor-pointer transition-colors">Cookies</li>
      </ul>
    </nav>
  </div>
</div>
  );
};

export default Footer;
