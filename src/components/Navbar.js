import React from "react";
import Logo from "../Assets/Logo.svg";
import { Menu } from "@headlessui/react";
import { VscAccount } from "react-icons/vsc";
import { FcMenu } from "react-icons/fc";

function Navbar() {
  return (
    <div className="h-20 w-full bg-transparent flex flex-row justify-between">
      <div className=" h-15 place-content-center px-20">
        <img src={Logo} alt="logo" className="w-15 max-h-20 " />
      </div>
      <div className="flex flex-column h-20 z-50 place-content-center px-20 my-auto ">
        <Menu as="div" className="flex flex-column relative">
          <Menu.Button className="place-content-center flex my-auto ">
            <FcMenu className="w-10 h-10 fill-white " />
          </Menu.Button>
          <Menu.Items className="absolute flex flex-col h-50 place-content-center z-50 top-20 -right-10 bg-transparent w-48 rounded border-l-fuchsia-300">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active
                      ? " bg-slate-600 align-middle items-center flex p-1 place-content-center text-purple-50 rounded-xl  border-l-pink-300"
                      : " bg-transparent align-middle items-center flex p-1 place-content-center text-indigo-50 rounded-xl  border-l-pink-300"
                  }`}
                  s
                  href="/account-settings"
                >
                  <VscAccount className="h-8 w-8 m-0 p-1" /> Your Account
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active
                      ? " bg-slate-600 align-middle items-center flex p-1 place-content-center text-purple-50 rounded-xl  border-l-pink-300"
                      : " bg-transparent align-middle items-center flex p-1 place-content-center text-indigo-50 rounded-xl  border-l-pink-300"
                  }`}
                  s
                  href="/account-settings"
                >
                  Documentation
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
