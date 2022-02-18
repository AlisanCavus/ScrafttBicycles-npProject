import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

function RecoveryPasswordAlert(props) {
  const { handleCloseModal } = props;
  return (
    <div className="  w-3/4 h-40 align-middle mx-auto bg-primary mobile:flex mobile:w-full mobile:justify-center rounded mobile:flex-col">
      <div className="flex bg-primary w-full flex-col align-middle justify-center rounded mobile:w-screen">
        <div className=" -m-4 mobile:-m-6 mobile:mx-auto">
          <button
            className="mr-auto float-right border-1 z-50 rounded border-slate-500 cursor-pointer  bg-inherit  hover:animate-spin"
            onClick={handleCloseModal}
          >
            <AiFillCloseCircle className=" w-12 h-12 text-slate-500 border-2 border-slate-500 rounded-full z-50" />
          </button>
        </div>
        </div>
        <div className="flex justify-center -mt-4 w-full h-full ">
          <span className="align-center my-auto p-4">
            We sent you an email to recover your password.
          </span>
        </div>
      
    </div>
  );
}

export default RecoveryPasswordAlert;
