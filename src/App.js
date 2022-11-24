import React, { useEffect, useState } from 'react';
//import Navbar from './components/Navbar/Navbar';
//import { Outlet } from "react-router-dom";
import Card from './components/Sunday_card/Card';






function App() {

  const [qcatagory, setQcatagory] =useState([])

  useEffect(() => {

    fetch('https://quiz-app-server-zeta.vercel.app/quiz/category')
    .then(res => res.json())
    .then (data => setQcatagory(data.data))
  
   }, [])

  console.log("shuvro",qcatagory);

  return (
    <div> 
      <div className="wrapper">

        {
          qcatagory.map(cat =>
            <Card
            key={cat._id}
            cat={cat}
            />
            )
        }
    </div>
      
    </div>
  );
}

export default App;
