import React from "react";

type greetprops = {
 name:{
    firstname:string,
    lastname:string,
 },
 date:{
    day:number,
    month:number,
    year:String,
 }
};

type nameList={
    names:{
        first:string
        last:string
    }[]
}
export const Greet = (props: greetprops) => {
  return (
    <div>
      <h1>first:{props.name.firstname}</h1>
      <h1>last:{props.name.lastname}</h1>
      <h1>day:{props.date.day}</h1>
      <h1>day:{props.date.month}</h1>
      <h1>day:{props.date.year}</h1>
    </div>
  );
};

export const ListName=(props:nameList)=>{
    return(
        <div>
 <ul>{props.names.map((name)=><li key={name.first}>{name.first}&nbsp;{name.first}</li>)}</ul>
        </div>
    )
}
