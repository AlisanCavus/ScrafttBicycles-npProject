import React, { useState } from 'react';
import TeamMembers from '../components/TeamMembers';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import  belgium from '../be.json'


function About() {
  const [ activeBranch, setActiveBranch ] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [team, setTeam] = useState([
    {
      id: 0,
      name: 'Lara Croft',
      titr: 'Founder',
      img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 1,
      name: 'Sonya Blade',
      titr: 'Co-Founder',
      img: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 2,
      name: 'Alisan Cavus',
      titr: 'Webmaster',
      img: 'https://i.ibb.co/zsLHZjJ/EC9-E5-F05-5-E09-4502-ACF2-32-E034-D295-C5.jpg',
    },
    {
      id: 3,
      name: 'Max Payne',
      titr: 'Head Engineer',
      img: 'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 4,
      name: 'Gordon Freeman',
      titr: 'Head Designer',
      img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
  ]);

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
          <div className="flex flex-row justify-center h-4/12 ">
            <div className=" w-5/12 h-full text-center mx-auto py-24 mobile:py-14">
              <p className="text-slate-700">
                We are bunch of engineers and mechanics with passionate since
                2010. We believe one thing that hardworking will eventually
                gives you what you want. In
                <span className="animate-pulse text-main font-extrabold ">
                  &nbsp;Scraftt
                </span>
                , we have an amazing team and so proud to introduce to you.
              </p>
            </div>
            <div className=" w-[2px] fill-slate-700 text-slate-700 min-h-full bg-slate-700 opacity-70 "></div>
            <div className="w-5/12 h-full text-center mx-auto py-24 mobile:py-14">
              <p className="text-slate-700">
                In
                <span className="animate-pulse text-main font-extrabold ">
                  &nbsp;Scraftt
                </span>
                We believe team-work is the key for success. Our team step ahead
                on everyday to give you well-designed, perfectly crafted bikes
                to ride. Not only making bikes but also maintaining them is our
                priority. When you buy one of our bikes, You are not just
                becoming a customer: You are becoming a life partner with us.
              </p>
            </div>
          </div>

          <div className="h-4/12 flex justify-center py-5 border-t-2 w-1/3 border-opacity-70 mx-auto border-slate-700 mobile:w-full">
            <h1 className="text-slate-700 font-sans font-medium text-4xl items-start mobile:text-xl">
              Meet with the <span className="text-4xl mobile:text-2xl items-end">"Team"</span>
            </h1>
          </div>

          <ul className="flex flex-row w-full h-full mx-auto justify-evenly mobile:flex-col mobile:grid mobile:text-center">
            {team.map((item, index) => (
              <TeamMembers
                key={item.id}
                index={index}
                id={item.id}
                name={item.name}
                titr={item.titr}
                img={item.img}
              />
            ))}
          </ul>

            <div className="flex justify-center my-5 ">
              <span className="text-4xl my-5 py-5 w-1/2 text-center font-semibold text-slate-700 border-t-2 border-slate-700 mobile:text-xl mobile:w-10/12">"  We are so close to you! "</span>
            </div>
          <div  className="w-full h-96 flex justify-center z-50 my-auto">
          <MapContainer id="map" center={[50.845515822047375, 4.357520085731559]} zoom={7} className=" w-full h-96">
            <TileLayer
            className="bg-primary"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
              {belgium.map(locs => (
              <Marker key={locs.population_proper} position={[locs.lat, locs.lng]} 
              onClick={() => {
                setActiveBranch(locs)
              }}
              />
              ))}
            {activeBranch && <Popup onClose={setActiveBranch(null)} position={[activeBranch.lat, activeBranch.lng]}>
                <div className="w-10 h-10 z-50">
                  <h2>
                    Our {activeBranch.city} Branch
                  </h2>
                </div>
            </Popup>}
          </MapContainer>
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default About;
