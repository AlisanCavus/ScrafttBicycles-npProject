import React, {useRef, useState, useContext} from 'react';
import Logo from '../Assets/Logo.svg';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'


function SignUp({ close, setClose, handleCloseModal }) {

    const emailRef = useRef()
    const passwordRef = useRef()
    const cPasswordRef = useRef()
    const { register } = useAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const {setAuth} = useAuth()
  
   

    async function handleSubmit(e) {
      e.preventDefault()

      if (passwordRef.current.value !== cPasswordRef.current.value) {
        return setError('Passwords do not matched!')
      } else if (passwordRef.current.value < 8  ){
        return setError('Your Password should be at least 8 characters.')
      }
      try {
      setError('')
      setLoading(true)
      await register(emailRef.current.value, passwordRef.current.value)
      .then((response) => console.log(response.user.email))
      .catch((error) => console.log(error.message))
      navigate('/')
      
      } catch {
        setError('Failed to create an account')
      }
      setLoading(false)
    }


  return (
    <div className=" container mx-auto w-full h-min my-auto bg-black rounded-xl">
      <div className="flex bg-secondary w-full flex-col align-middle justify-center rounded-xl">
        <div className=" -m-4">
          <button
            className="mr-auto float-right border-1 rounded border-primary cursor-pointer bg-inherit  hover:animate-pulse"
            onClick={handleCloseModal}
          >
            
            <AiFillCloseCircle className=" w-12 h-12 text-primary border-2 border-tonage rounded-full" />
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
                placeholder="Choose a password min. 8 characters."
                required
                name="password"
                minLength="8"
                ref={passwordRef}
              />
              
            </div>
            <div className="my-4 mx-auto flex flex-col ">
              <label htmlFor="cPassword" className=" text-center">
                Confirm your password:
              </label>
              <input
                type="password"
                className=" w-96 h-12 rounded-2xl my-4 px-5 placeholder:text-center"
                placeholder="Retype your password"
                required
                minLength="8"
                name="cPassword"
                ref={cPasswordRef}
              />
              
            </div>
            <span className="text-center text-red-600">{error}</span>
            <div 
            disabled={loading}
            className="my-16 px-5 h-12 flex flex-col align-middle mx-auto rounded-2xl bg-primary border-2 border-tonage justify-center cursor-pointer hover:animate-pulse text-textMain">
              <button type="submit"> Sign Up</button>
            </div>
          </form>

          <div className="text-center mb-4">
            <hr className="border-4 border-primary"/>
            <span className="mx-4">Do you already have an account?</span>
            <Link to="/Login" className=" bg-primary border-2 border-tonage px-5 rounded-2xl mx-4 text-textMain hover:animate-pulse"> Login </Link>
            <hr className="border-4 border-primary"/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
