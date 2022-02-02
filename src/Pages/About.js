import React, {useState} from 'react';
import TeamMembers from '../components/TeamMembers';

function About() {

  const [ team , setTeam ] = useState([
    {id:0, name:'Lara Croft', titr: 'Founder', img:'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {id:1, name:'Sonya Blade', titr: 'Co-Founder', img:'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {id:4, name:'Gordon Freeman', titr: 'Head Designer', img:'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'},
    {id:3, name:'Max Payne', titr: 'Head Engineer', img:'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {id:2, name:'Alisan Cavus', titr: 'Webmaster', img:"https://i.ibb.co/zsLHZjJ/EC9-E5-F05-5-E09-4502-ACF2-32-E034-D295-C5.jpg" },
  ])
  
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
            <div className=' w-5/12 h-full text-center mx-auto py-24 mobile:py-14 '>
              <p className='text-slate-700'> We are bunch of engineers and mechanics with passionate since 2010. We believe one thing that hardworking will eventually gives you what you want. In scraftt, we have an amazing team and so proud to introduce to you.</p>
            </div>
            <div className=' w-0.5 fill-slate-700 text-slate-700 min-h-full bg-slate-700 opacity-60 '>
              
            </div>
            <div className='w-5/12 h-full text-center mx-auto py-24 mobile:py-14'>
            <p className='text-slate-700'> In <span className="animate-pulse text-main font-extrabold ">&nbsp;Scraftt</span> We believe team-work is the key for success. Our team step ahead on everyday to give you well-designed, perfectly crafted bikes to ride. Not only making bikes but also  maintaining them is our priority. When you buy one of our bikes, You are not just becoming a customer: You are becoming a life partner with us.  </p>
            </div>
          </div>

          <div className='h-4/12 flex justify-center py-5 border-t w-1/3 mx-auto border-slate-700 mobile:w-full'>
            <h1 className='text-slate-700 font-sans font-medium text-4xl items-start'> Meet with the <span className='text-4xl items-end'>"Team"</span>  </h1>
          </div>

          <ul className='flex flex-row w-full h-full mx-auto justify-evenly'>
            {team.map((item, index) => 
              <TeamMembers index={index} id={item.id} name={item.name} titr={item.titr} img={item.img}/>
            )}
          </ul>
           
          
        </div>

        <div className="min-h-screen">

        </div>

      </div>
    </div>
  );
}

export default About;
