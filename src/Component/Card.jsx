import React from 'react';

function Header() {
    return(
        <h1 className="heading_style">List Of Top 6 Netflix Series in 2021</h1>
    )

}

function Card(props) {
    return (
        <div className="cards">
         <div className="card">
           <img className="card_img" src={props.imgsrc} />
           <div className="card_info">
               <span className="card_category">{props.title}</span>
               <h3 className="card_title">{props.showname}</h3>
               <a href={props.links} target="_blank"> 
               <button>Watch Now</button> 
               </a>
           </div>

         </div>
        </div>
    );
    
}

export {
    Card, Header
};