import React,{useState} from 'react';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teamslider() {
// syntax
const [Xyz,setXyz] = useState([9,"po",{Lk:"po"}]);

// const [Var,Function] = useState(initialState) : syntax

console.log({state:Xyz});

const normal = () =>{
    setXyz(56)
}
var arr2 = [
    {link:"https://www.mydomaine.com/thmb/ReRrtofgfEd4tyfdub0P_uYjKB0=/4032x3024/filters:no_upscale():max_bytes(150000):strip_icc()/ORCWeek8-RevealPhoto-f309326bc6fa41c384686dab99a7b01e.jpg"},
    {link:"https://media.designcafe.com/wp-content/uploads/2019/11/17054858/whats-the-big-deal-about-home-interior-design.jpg"},
    {link:"https://designbylavassa.com/images/Home-Interior-Design-in-Kanpur.jpg"},
    {link:"https://media.designcafe.com/wp-content/uploads/2019/12/17055333/living-room-interior-design-checklist-intro.jpg"},
    {link:"https://www.worldofinteriors.co.uk/images/Antiques-(1).jpg"},
    {link:"https://interiorsinfo.com/media/63711/Image/876.jpg"},
    {link:"https://i.pinimg.com/originals/6f/86/98/6f8698ff850f2442babd76fa1fde5d8b.jpg"},
    {link:"https://i.pinimg.com/736x/b6/38/de/b638dec6ea91c2122b1d8f9845a6e934.jpg"},
    {link:"https://i.pinimg.com/originals/9e/d2/ca/9ed2ca1814a6e60f3ca818e2d05cd409.png"},
    {link:"https://i.pinimg.com/736x/b6/38/de/b638dec6ea91c2122b1d8f9845a6e934.jpg"},
]

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        // arrows:true,
      };
    
    return (
        // dom html tags /components reacts components
        <div className="slide">
            <br/>
            <div className="inspo">
            <h4>RECOMMENDED INSPIRATIONS</h4>
            <hr/>
            <br/>

            </div>
           

             <Slider arrows={true} {...settings}>
         {
             arr2.map(data=>{

                return ( <div>
                    <img className="sliderimage" src={data.link} alt="" />
                          </div>)
             })
         }
         
        </Slider>
        <br/>
        <br/>
        </div>
    )
}