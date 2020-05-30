import React, { useState, useEffect } from 'react';

import Cardmaker from "./Cardmaker";
import axios from "axios";

const Newcontent = () =>{
    const[data, setData] = useState([])

    useEffect(() => {
  axios.get("https://swapi.co/api/people/")

  // https://rick-api.herokuapp.com/api/people/

  .then(response => {

    setData(response.data.results)
    console.log(response.data.results)
  } )

  .catch(error=>{
      console.log(error)
  })

},[])


return (
    <div>

    {data.map(i => (
        <Cardmaker data = {i}/>
    ))}

    </div>
)
    }


export default Newcontent