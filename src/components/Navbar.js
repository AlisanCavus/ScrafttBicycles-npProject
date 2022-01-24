import React from 'react';
import Logo from '../Assets/Logo.svg';
import { Menu } from '@headlessui/react';
import { AiOutlineLine } from 'react-icons/ai';
import {
  MdDirectionsBike,
  MdLogin,
  MdLogout,
  MdOutlineInfo,
} from 'react-icons/md';
import { BsCart4 } from 'react-icons/bs';
import { animated, useSpring } from 'react-spring';
import { RiHeart2Line, RiProductHuntLine } from 'react-icons/ri';
import { Link, Outlet } from 'react-router-dom';
import { IoCreate } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { useAuth } from '../Contexts/AuthContext'


function Navbar() {


  const { auth } = useAuth()
  

  const anim = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 20 },
    delay: 300,
  });

  const anim1 = useSpring({
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
    delay: 350,
  });

  return (
    <div>
      <div className="h-20 w-full bg-primary flex flex-row justify-between">
        <animated.div
          style={anim1}
          className=" h-15 place-content-center px-20 items-center align-middle flex mobile:px-1"
        >
          <Link to="/" className="flex">
            <img src={Logo} alt="logo" className=" w-32 h-[80px]" />
          </Link>
        </animated.div>

        <div className="flex flex-column h-20 z-1 place-content-center px-20 my-auto mobile:px-2 ">
          <animated.div style={anim}>
            <Menu
              as="div"
              className="flex flex-column relative mobile:content-center mobile:mx-auto"
            >
              <Menu.Button className="place-content-center flex my-auto hover group flex-row">
                <AiOutlineLine className=" text-textMain mt-6  -right-[1rem]   group-hover:animate-bounce group-active:animate-bounce "></AiOutlineLine>
                <AiOutlineLine className=" text-textMain mt-2 -right-[2rem] visible  group-hover:animate-bounce group-active:animate-bounce   "></AiOutlineLine>
                <AiOutlineLine className=" text-textMain  -mt-2 -right-[3rem] visible  group-hover:animate-bounce group-active:animate-bounce  "></AiOutlineLine>
                <MdDirectionsBike className="w-10 h-10 text-textMain " />
              </Menu.Button>

              <Menu.Items
                className="absolute flex flex-col h-50 place-content-center z-50 top-16 -right-[4rem] bg-primary w-48 mobile:w-full mobile:right-[80%] rounded-2xl border-4 border-secondary
            "
              >
                {auth?.currentUser &&  (<Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? ' bg-bart align-middle items-center flex p-1 place-content-center text-primary  rounded-xl  mobile:w-40'
                          : ' bg-primary align-middle items-center flex p-1 place-content-center text-textMain  rounded-xl  mobile:w-40'
                      }`}
                      to="/Profile"
                    >
                      <CgProfile className="h-6 w-6 m-0 p-1" /> Your Profile
                    </Link>
                  )}
                </Menu.Item>)}

                {auth?.currentUser && (<Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? ' bg-bart align-middle items-center flex p-1 place-content-center text-primary  rounded-xl mobile:w-40'
                          : ' bg-primary align-middle items-center flex p-1 place-content-center text-textMain  rounded-xl  mobile:w-40 '
                      }`}
                      to="/YourCart"
                    >
                      <BsCart4 className="h-6 w-6 m-0 p-1" /> Your Cart
                    </Link>
                  )}
                </Menu.Item>)} 

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? ' bg-bart align-middle items-center flex p-1 place-content-center text-primary  rounded-xl  mobile:w-40'
                          : ' bg-primary align-middle items-center flex p-1 place-content-center text-textMain  rounded-xl mobile:w-40'
                      }`}
                      to="/Favorites"
                    >
                      <RiHeart2Line className="h-6 w-6 m-0 p-1" /> Favorites
                    </Link>
                  )}
                </Menu.Item>

                {!auth?.currentUser && (<Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? ' bg-bart align-middle items-center flex p-1 place-content-center text-primary  rounded-xl  mobile:w-40'
                          : ' bg-primary align-middle items-center flex p-1 place-content-center text-textMain  rounded-xl  mobile:w-40'
                      }`}
                      to="/Login"
                    >
                      <MdLogin className="h-6 w-6 m-0 p-1" /> Login
                    </Link>
                  )}
                </Menu.Item> )}
                 
                
              
             
                
               {!auth?.currentUser && (<Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? ' bg-bart align-middle items-center flex p-1 place-content-center text-primary  rounded-xl  mobile:w-40'
                          : ' bg-primary align-middle items-center flex p-1 place-content-center text-textMain  rounded-xl  mobile:w-40'
                      }`}
                      to={{
                        pathname: '/SignUp',
                        state: {modal: true}  
                      }}

                    >
                      <IoCreate
                        className="h-6 w-6 m-0 p-1"
                      
                      />{' '}
                      Sign Up
                    </Link>
                  )}
                </Menu.Item>)}

                

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? ' bg-bart align-middle items-center flex p-1 place-content-center text-primary  rounded-xl  mobile:w-40'
                          : ' bg-primary align-middle items-center flex p-1 place-content-center text-textMain  rounded-xl  mobile:w-40'
                      }`}
                      to="/Products"
                    >
                      <RiProductHuntLine className="h-6 w-6 m-0 p-1" /> Products
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? ' bg-bart align-middle items-center flex p-1 place-content-center text-primary  rounded-xl  mobile:w-40'
                          : ' bg-primary align-middle items-center flex p-1 place-content-center text-textMain  rounded-xl  mobile:w-40'
                      }`}
                      to="/About"
                    >
                      <MdOutlineInfo className="h-6 w-6 m-0 p-1" /> About Us
                    </Link>
                  )}
                </Menu.Item>


                
                {auth?.currentUser && (<Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? ' bg-bart align-middle items-center flex p-1 place-content-center text-primary  rounded-xl  mobile:w-40'
                          : ' bg-primary align-middle items-center flex p-1 place-content-center text-textMain  rounded-xl  mobile:w-40'
                      }`}
                      to="/Login"
                    >
                      <MdLogout className="h-6 w-6 m-0 p-1" /> Logout
                    </Link>
                  )}
                </Menu.Item>)}
                
              </Menu.Items>
            </Menu>
          </animated.div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
