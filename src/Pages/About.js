import React from 'react';

function About() {
  return (
    <div className=" min-h-screen bg-primary overflow-hidden">
      <div className="flex flex-col">

        <div className="min-h-screen bg-garage bg-cover opacity-70 grid ">
          <div className="w-full min-h-full grid  justify-center text-center items-center ">
            <div>
              <h1 className=" h-2/4 drop-shadow-2xl shadow-slate-700 textarea-ghost text text-accent-content opacity-100 text-8xl font-medium tracking-widest uppercase">
                Who we are <span className=" animate-pulse">?</span> 
              </h1>
            </div>
            <div className=" self-start">
              <h5 className=" h-2/4  drop-shadow-2xl shadow-slate-700 textarea-ghost text text-accent-content text-5xl tracking-widest font-medium mobile:text-2xl">
                Designers, Thinkers & Collaborators
              </h5>
            </div>
          </div>
        </div>

        <div className="min-h-screen flex flex-row">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="min-h-screen"></div>

      </div>
    </div>
  );
}

export default About;
