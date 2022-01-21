import React from "react";
import Logo from "../Assets/Logo.svg";
import { Menu } from "@headlessui/react";
import { AiOutlineLine } from "react-icons/ai";
import { MdDirectionsBike } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { animated , useSpring } from 'react-spring'

function Navbar() {

  const anim = useSpring({
    from: { opacity: 0, marginTop: -1000},
    to:{opacity: 1, marginTop: 20},
    delay: 500
  })


  const anim1 = useSpring({
    from:{ opacity: 0, marginLeft: -500},
    to:{ opacity: 1, marginLeft: 0},
    delay: 500
  })


  return (
    <div className="h-20 w-full bg-transparent flex flex-row justify-between">
      
      <animated.div style={anim1} className=" h-15 place-content-center px-20 items-center align-middle flex">
        <img src={Logo} alt="logo" className=" w-full h-3/4" />
      </animated.div>
      
      <div className="flex flex-column h-20 z-50 place-content-center px-32 my-auto ">
      
      <animated.div style={anim}>
        <Menu as="div" className="flex flex-column relative">
          
          <Menu.Button className="place-content-center flex my-auto hover group flex-row">
            <AiOutlineLine className=" text-textMain mt-6  -right-[1rem]   group-hover:animate-bounce group-active:animate-bounce "></AiOutlineLine>
            <AiOutlineLine className=" text-textMain mt-2 -right-[2rem] visible  group-hover:animate-bounce group-active:animate-bounce   "></AiOutlineLine>
            <AiOutlineLine className=" text-textMain  -mt-2 -right-[3rem] visible  group-hover:animate-bounce group-active:animate-bounce  "></AiOutlineLine>
            <MdDirectionsBike className="w-10 h-10 text-textMain " />
          </Menu.Button>
          
          <Menu.Items className="absolute flex flex-col h-50 place-content-center z-50 top-20 -right-[4rem] bg-transparent w-48">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active
                      ? " bg-bart align-middle items-center flex p-1 place-content-center text-primary  rounded-xl  "
                      : " bg-transparent align-middle items-center flex p-1 place-content-center text-textMain  rounded-xl  "
                  }`}
                  s
                  href="/Cart"
                >
                  <BsCart4 className="h-6 w-6 m-0 p-1" /> Your Cart
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active
                      ? " bg-bart align-middle items-center flex p-1 place-content-center text-primary  rounded-xl  "
                      : " bg-transparent align-middle items-center flex p-1 place-content-center text-textMain  rounded-xl  "
                  }`}
                  s
                  href="/Products"
                >
                  Products
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active
                      ? " bg-bart align-middle items-center flex p-1 place-content-center text-primary  rounded-xl  "
                      : " bg-transparent align-middle items-center flex p-1 place-content-center text-textMain  rounded-xl  "
                  }`}
                  s
                  href="/About Us"
                >
                  About Us
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
        </animated.div>
      </div>
    </div>
  );
}

export default Navbar;
