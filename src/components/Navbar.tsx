import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-center w-full absolute z-50">
      <div className="container flex flex-row items-center justify-between">
        <div className="w-36 h-36">
          <img
            className="w-full"
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
          />
        </div>
        <div>
          <ul className="flex">
            <li className="p-4">
              <Link
                className="text-white opacity-75 hover:opacity-100"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="text-white opacity-75 hover:opacity-100"
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="text-white opacity-75 hover:opacity-100"
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="text-white opacity-75 hover:opacity-100"
                href="/other"
              >
                Other
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
