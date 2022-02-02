import React from 'react';

function About() {
  return (
    <div className=" min-h-screen bg-primary overflow-hidden">
      <div className="flex flex-col">

        <div className="min-h-screen bg-garage bg-cover opacity-70 grid ">
          <div className="w-full min-h-full grid  justify-center text-center items-center ">
            <div>
              <h1 className=" h-2/4  shadow-slate-700 text-shadow text-primary  textarea-ghost drop-shadow-lg  text-accent-content opacity-100 text-5xl font-medium tracking-widest uppercase">
                Who we are <span className=" animate-pulse">?</span> 
              </h1>
            </div>
            <div className=" self-start">
              <h5 className=" h-2/4  drop-shadow-lg text-shadow shadow-slate-700 text-primary textarea-ghost  text-accent-content text-5xl tracking-widest font-medium mobile:text-2xl">
                Designers, Thinkers & Collaborators
              </h5>
            </div>
          </div>
        </div>

        <div className="min-h-screen flex flex-col">
          
          <div className='flex flex-row justify-center h-4/12 '>
            <div className=' w-5/12 h-full text-center mx-auto py-24 '>
              <p className='text-slate-700'> We are bunch of engineers and mechanics with passionate since 2010. We believe one thing that hardworking will eventually gives you what you want. In scraftt, we have an amazing team and so proud to introduce to you.</p>
            </div>
            <div className=' w-0.5 fill-slate-700 text-slate-700 min-h-full bg-slate-700 opacity-60 '>
              
            </div>
            <div className='w-5/12 h-full text-center mx-auto py-24'>
            <p className='text-slate-700'> In <span className="animate-pulse text-main font-extrabold ">&nbsp;Scraftt</span> We believe team-work is the key for success. Our team step ahead on everyday to give you well-designed, perfectly crafted bikes to ride. Not only making bikes but also  maintaining them is our priority. When you buy one of our bikes, You are not just becoming a customer: You are becoming a life partner with us.  </p>
            </div>
          </div>

          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
        </div>

        <div className="min-h-screen"></div>

      </div>
    </div>
  );
}

export default About;
