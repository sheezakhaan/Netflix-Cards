import React from 'react';
import {Card, Header}  from "./Component/Card";
import Showdata from "./Component/Sdata"
import './App.css';

const App = () => {
  return (
    <div>

     <Header />
     {Showdata.map((val) => { 
       return (
      <Card
       key={val.id}
       imgsrc={val.imgsrc}
       title={val.title}
       showname={val.showname}
       links={val.links}
       />
       )
       })}

    </div>
  )
}

export default App;




//  First method 
// <Card 
//     imgsrc= "file.jpg"
//     title= "Dora"
//     showname= "Dora & Bob"
//     links= "www.netflix.com"
// />  

//  Middle method
//  <Card 
//       imgsrc= {Showdata[0].imgsrc}
//       title= {Showdata[0].title}
//       showname= {Showdata[0].showname}
//       links= {Showdata[0].links}
//   /> 




// If else method

// const favSeries = "netflix";
// { favSeries === "netflix") ?
//      <Card /> :
//      <Amazon />;
// };


