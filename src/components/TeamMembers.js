import React from "react";

function TeamMembers(props) {
  

  const {index, id, name, titr, img } = props;


  if (index % 2 === 1) {return (
    <li key={id} className="h-full flex flex-col w-40 mobile:justify-center mobile:grid">
      <div className="flex justify-center mobile:flex-col mobile:mx-auto">
        <img src={img} alt=" team members" className=" w-20 h-20 object-center object-cover rounded-full " />
      </div>
      <div className="flex justify-center text-xl text-slate-800">
        <h1 className="  font-medium"> {name}</h1>
      </div>
      <div className="flex justify-center text-md text-slate-600">
        <h3 className="  font-normal">{titr} </h3>
      </div>
    </li>
  );} else {
    return (
      <li key={id} className="h-full flex flex-col w-40 mobile:justify-center mobile:grid">
      <div className="flex justify-center mobile:flex-col mobile:mx-auto">
        <img src={img} alt=" team members" className=" w-20 h-20 object-center object-cover rounded-full " />
      </div>
      <div className="flex justify-center text-xl text-slate-800">
        <h1 className="  font-medium"> {name}</h1>
      </div>
      <div className="flex justify-center text-md text-slate-600">
        <h3 className="  font-normal">{titr} </h3>
      </div>
    </li>
      );
  }
  
}

export default TeamMembers;


