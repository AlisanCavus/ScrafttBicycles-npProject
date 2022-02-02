import React from "react";

function TeamMembers(props) {
  console.log(props);

  const {index, id, name, titr, img } = props;


  if (index % 2 === 1) {return (
    <li key={id} className="h-full flex flex-col w-40">
      <div className="flex justify-center mobile:flex-col">
        <img src={img} alt=" team members" className=" rounded-full object-fit" />
      </div>
      <div className="flex justify-center text-xl text-slate-800">
        <h1 classname="  font-medium"> {name}</h1>
      </div>
      <div className="flex justify-center text-md text-slate-600">
        <h3 classname="  font-normal">{titr} </h3>
      </div>
    </li>
  );} else {
    return (
        <li key={id} className="h-full flex flex-col w-40">
          <div className="flex justify-center mobile:flex-col h-60">
            <img src={img} alt=" team members" className=" rounded-full object-fit" />
          </div>
          <div className="flex justify-center text-xl text-slate-800">
            <h1 classname="  font-medium"> {name}</h1>
          </div>
          <div className="flex justify-center text-md text-slate-600">
            <h3 classname="  font-normal">{titr} </h3>
          </div>
        </li>
      );
  }
  
}

export default TeamMembers;


