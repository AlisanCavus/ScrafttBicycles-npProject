import React, {useRef, useState, useEffect} from 'react';
import Logo from '../Assets/Logo.svg';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'



function Login({ closeModal, handleCloseModal}) {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const { currentUser } = useAuth()

    const mounted = useRef(false)
    
    useEffect(() => {
      mounted.current = true
    
      return () => {
        mounted.current = false
      };
    }, []);
    

    async function handleSubmit(e) {
      e.preventDefault()

      
      
      try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      .then((response) => console.log(response.user.email))
      .catch((error) => console.log(error.message))
      navigate('/Profile')
      
      } catch {
        setError('Failed to Login')
      }
      setLoading(false)
    }
  


    
  return (
    <div className=" container mx-auto w-full h-min my-auto bg-black rounded-xl">
      <div className="flex bg-secondary w-full flex-col align-middle justify-center rounded-xl">
        <div className=" -m-4">
          <button
            className="mr-auto float-right border-1 z-50 rounded border-primary cursor-pointer  hover:animate-spin"
            onClick={handleCloseModal}
          >
            <AiFillCloseCircle className=" w-12 h-12 text-primary border-2 border-tonage rounded-full z-50" />
          </button>
        </div>
        <div className="justify-center text-center py-5">
          <span>
            
            Welcome to the
            <img
              src={Logo}
              alt="logo"
              className=" w-16 h-16 m-0 p-0 inline "
            />
          </span>
        </div>
        <div className="flex justify-center flex-col mx-auto w-full">
          <form onSubmit={handleSubmit} className="flex justify-center flex-col mx-auto w-full  ">
            <div className="my-4 mx-auto flex flex-col ">
              <label htmlFor="email" className=" text-center ">
                Enter your e-mail:
              </label>
              <input
                className=" w-96 h-12 px-5 rounded-2xl placeholder:text-center my-4"
                type="email"
                name="email"
                placeholder="...ex@example.com"
                required
                ref={emailRef}
               
              />
              
            </div>
            <div className="my-4 mx-auto flex flex-col ">
              <label htmlFor="password" className="text-center">
                
                Enter a password:
              </label>
              <input
                type="password"
                className=" w-96 h-12 my-4 px-5 rounded-2xl placeholder:text-center"
                placeholder="Your password"
                required
                name="password"
                minLength="8"
                ref={passwordRef}
                
              />
              
            </div>
          
            <span className="text-center text-red-600">{error}</span>
            <div 
           
            className="my-16 px-5 h-12 flex flex-col align-middle mx-auto rounded-2xl bg-primary border-2 border-tonage justify-center cursor-pointer hover:animate-pulse text-textMain">
              <button type="submit"> Login </button>
            </div>
          </form>

          <div className="text-center">
            <hr className="border-4 border-primary"/>
            <span className="mx-4">Forgot your password?</span>
            <Link to="/Signup" className=" bg-primary border-2 border-tonage px-5 rounded-2xl mx-4 text-textMain hover:animate-pulse">New Password </Link>
            <hr className="border-4 border-primary"/>
          </div>


          <div className="text-center mb-4">
           
            <span className="mx-4">Do you need an account?</span>
            <Link to="/Signup" className=" bg-primary border-2 border-tonage px-5 rounded-2xl mx-4 text-textMain hover:animate-pulse">Sign Up </Link>
            <hr className="border-4 border-primary"/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
