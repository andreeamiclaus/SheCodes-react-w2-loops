import React from "react";

export default function BalticCountries(){
  let countries =["Estonia", "Latvia",  "Lithuania" ]
  return(

    <div className="BalticCountries">
    <ul>{
     //here is better to use the arrow function cities.map((city,index)=>
     countries.map(function(country, index){
 return (
   //need to have a key attribute on each child of the list
    <li key={index}> {country} </li>
 )


   })}

   </ul>
   </div>
 )

}