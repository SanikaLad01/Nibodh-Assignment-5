import React from 'react';
import Card from './card';

let array=
    [
        {
            src:"https://www.digsdigs.com/photos/2013/07/51-inspiring-bohemian-living-room-designs-20-775x779.jpg",
            title:"DELHI, INDIA",
            desc:"Curated this amazing chic and boho place at Delhi for Mr and Mrs Sharma just how they wanted. ",
            val:78
        },
        {
            src:"https://ksassets.timeincuk.net/wp/uploads/sites/56/2020/03/White-bedroom-with-alcove-shelving.jpg",
            title:"KOLKATA, INDIA",
            desc:"This pretty blue and white themed bedroom was made for Mr Banarjee for his new house.",
            val:88
        },
        {
            src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-decor-ideas-1580491833.jpg?crop=1.00xw:0.669xh;0,0.151xh&resize=640:*",
            title:"MUMBAI, INDIA",
            desc:"Designed this place for Mr and Mrs Kapoor adding a little vintage touch just the way they wanted. ",
            val:95
        }
    ]

export default function card() {
    return (
        <div>
            <div>
            <div className="row">
                <div className="col-12">
                    
                    <div className="d-flex card1">
                        {
                            array.map(data=>{
                                return(
                                <Card src={data.src} title={data.title} desc={data.desc} val={data.val}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        </div>
        <br/>
        </div>
        
        
    )
}