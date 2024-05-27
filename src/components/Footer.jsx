import React from "react";
import { useSelector } from "react-redux";
import { BsPersonCircle, BsHouseFill, BsSearch, BsBuildingFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const auth = useSelector((state) => state.auth.status);

  if (auth) {
    return (
      <footer>
      </footer>
    );
  }

  return (
    <footer className="rounded-lg shadow m-4 w-full mb-auto bg-black">
      <div class="w-full px-[5rem] mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-pink-600">
              Rentify
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Rentify
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
