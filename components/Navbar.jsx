"use client";

import { FaBars } from "react-icons/fa";
import { navlinks } from "../constants/navlinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { div } from "framer-motion/client";
const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className=" py-5 px-2 md:px-14 backdrop-blur-md bg-black-100 text-white">
      <div className="flex items-center justify-between space-x-2 md:space-x-10">
        <Link href="/" className=" font-bold text-2xl lg:text-5xl">
          STONE
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r
            from-purple-400 to-pink-600"
          >
            web
          </span>
        </Link>
        <div className="flex items-center  justify-center space-x-5">
          {navlinks.map((navlink) => (
            <div key={navlink.name} className="hidden lg:block">
              {pathName === navlink.href ? (
                <Link
                  href={navlink.href}
                  className="bg-clip-text text-transparent bg-gradient-to-r
            from-purple-400 to-pink-600"
                >
                  {navlink.name}
                </Link>
              ) : (
                <Link href={navlink.href} className="text-white">
                  {navlink.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
