"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({link}) => {
const pathName = usePathname();
const isActive = pathName === link.href;
    return (
        <li>
            <Link href={link.href} className={isActive ? "text-white font-bold bg-[#244D3F]"
                  : "text-gray-500 hover:text-black"}>
                {link.logo}{link.label}
            </Link>
        </li>
    );
};

export default NavLinks;