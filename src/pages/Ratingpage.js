import React from 'react' ;
import codMobile from "../assets/codMobile.jpg" ;
import wow from "../assets/wow.jpg";
import pubg from "../assets/pubg.jpg";
import freefire from "../assets/freefire.jpeg"
import valorant from "../assets/valorant.jpg"
import fortnite from "../assets/fortnite.jpg"
import worldofwarships from "../assets/worldofwarships.jpg"
import "./Explore.css" ;
import Star from '../components/Star';  
function RatingPage() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0a0b, rgb(64, 20, 20))' }}>
       <div class="card-group">
  <div class="card m-5" style={{ background: 'linear-gradient(135deg, #7a0a0b, rgb(64, 20, 20))' , borderRadius:30 }}>
    <img class="card-img-top" src={codMobile} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">COD Mobile </h5>
         <Star/>
    </div>

  
  </div>
  <div class="card m-5 " style={{ background: 'linear-gradient(135deg, #7a0a0b, rgb(64, 20, 20))' , borderRadius:30 }}>
    <img class="card-img-top" src={wow} alt="Card image cap"/>
    <div class="card-body ">
      <h5 class="card-title">World of Warships Legends</h5>
       <Star/>
    </div>
   
  </div>
  <div class="card m-5 height:10" style={{ background: 'linear-gradient(135deg, #7a0a0b, rgb(64, 20, 20))' , borderRadius:30 }}>
    <img class="card-img-top" src={pubg} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">PUBG</h5>
        <Star/>
    </div>
    
  </div>
  <div class="card m-5" style={{ background: 'linear-gradient(135deg, #7a0a0b, rgb(64, 20, 20))' , borderRadius:30 }}>
    <img class="card-img-top" src={freefire} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">FREEFIRE</h5>
       <Star/>
    </div>
    
  </div>
</div>
<div class="card-group">
  <div class="card m-5" style={{ background: 'linear-gradient(135deg, #7a0a0b, rgb(64, 20, 20))' , borderRadius:30 }}>
    <img class="card-img-top" src={valorant} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">VALORANT</h5>
      <Star/>
    </div>
     
  </div>
  <div class="card m-5" style={{ background: 'linear-gradient(135deg, #7a0a0b, rgb(64, 20, 20))' , borderRadius:30 }}>
    <img class="card-img-top" src={fortnite} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Fortnite</h5>
      <Star/>
    </div>
    
  </div>
  <div class="card m-5 height:10" style={{ background: 'linear-gradient(135deg, #7a0a0b, rgb(64, 20, 20))' , borderRadius:30 }}>
    <img class="card-img-top" src={worldofwarships} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">worldofwarships</h5>
      <Star/>
    </div>
   
  </div>
</div>
    </div>
  )
}

export default RatingPage