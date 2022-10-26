import React from "react";

export default function Countries(props){

  return(

    <div className="Countries">
    <ul>{
     //here is better to use the arrow function cities.map((city,index)=>
     props.countries.map(function(country, index){
 return (
   //need to have a key attribute on each child of the list
    <li key={index}> The capital of {country.name} is {country.capital} </li>
 )


   })}

   </ul>
   </div>
 )

}