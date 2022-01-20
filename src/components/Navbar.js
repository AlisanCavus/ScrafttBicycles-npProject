import React from 'react';
import Logo from '../Assets/Logo.svg';
import { Menu } from '@headlessui/react';
import {TiThMenuOutline} from 'react-icons/ti'

function Navbar() {
  return (
    <div className="h-20 w-full bg-transparent flex flex-row justify-between">
      <div className=" h-15 place-content-center px-20">
        <img src={Logo} alt="logo" className="w-15 max-h-20 " />
      </div>
      <div className=" h-15 place-content-center px-20 ">
        <Menu>
          <Menu.Button className="place-content-center "><TiThMenuOutline className="w-10 h-10"/></Menu.Button>
          <Menu.Items className="flex flex-column min-h-max z-50">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Documentation
                </a>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              <span className="opacity-75">Invite a friend (coming soon!)</span>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
