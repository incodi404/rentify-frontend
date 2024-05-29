import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { Button } from "./ui/button";
import { BsChevronDown } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);

  console.log(authStatus); // should log the status

  if (!authStatus) {
    return (
      <header
        className="w-full flex justify-between px-10 py-5"
        style={{ postion: "fixed" }}
      >
        <div>
          <h2 className="font-bold uppercase text-[20px] text-pink-600">
            <Link to={"/"}>Rentify</Link>
          </h2>
        </div>
        <div className="gap-4 items-center text-[15px] font-bold hidden sm:flex">
          <Link to="/signin">
            <Button className="px-3 py-[7px] rounded">Create An Account</Button>
          </Link>
          <Link to="/login">
            <button className="border-[1px] border-slate-[#1D9BF0] hover:bg-sky-950 px-3 py-[7px] rounded">
              LOG IN
            </button>
          </Link>
        </div>
        <div className="gap-4 items-center text-[15px] font-bold flex sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link to="/signin">
                <button>
                  <FiMenu className="text-[25px]"/>
                </button>
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[11rem]">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link to="/signin">
                    <Button className="px-3 py-[7px] rounded">
                      Create An Account
                    </Button>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/login">
                    <button className="border-[1px] border-slate-[#1D9BF0] hover:bg-sky-950 px-3 py-[7px] rounded">
                      LOG IN
                    </button>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    );
  }

  return (
    <header
      className="w-full flex justify-between px-10 py-5"
      style={{ postion: "fixed" }}
    >
      <div>
        <h2 className="font-bold uppercase text-[20px]">
          <Link to={"/"}>Rentify</Link>
        </h2>
      </div>
      <div className="flex gap-4 items-center text-[15px] font-bold">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="uppercase">
              {" "}
              <BsChevronDown className="me-3" /> {user?.firstName}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[5rem]">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link to={`/my-profile`} className="w-full text-center">
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Logout />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Header;
