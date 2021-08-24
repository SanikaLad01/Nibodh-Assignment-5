import React from 'react'
import Bedroom  from "../components/images/bedroom.jpg"
export default function mission() {
    return (
        
        <div className="container">
            <br/>
            <div className="row ">
               <div className="col-6 abc">
               <img className="mission" src={Bedroom} alt=""/>
               </div>
               
            <div className="col-6 lad">
               <h1>Our Mission</h1>
            <br/>
               <p>Creating personalized homes across the country. Add personality and style to all private corners. Bedrooms, living rooms, kitchens, kidsroom, dining rooms 
                   made to pamper you just the way you want. Latest personalized modular wardrobes to store your prized possessions in them and instantly up the style quotient of your room. </p>
                   <button className="btn btn-outline-dark" style={{borderRadius:"30px"}} > LEARN MORE</button>
               </div>
            </div>
            <br/>
        </div>



          
    )
}
