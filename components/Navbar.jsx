"use client";

import { FaBars } from "react-icons/fa";
import { navlinks } from "../constants/navlinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { div } from "framer-motion/client";
const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className=" py-5 px-2 md:px-14 backdrop-blur-md">
      <div className="flex items-center justify-between space-x-2 md:space-x-10">
        <Link href="/" className=" font-bold text-2xl lg:text-5xl">
          STONE
          <span className="text-primary">web</span>
        </Link>
        <div className="flex items-center  justify-center space-x-5"></div>
      </div>
    </div>
  );
};

export default Navbar;
