import React, { useState } from 'react';
import {  Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { useSelector } from "react-redux";
import codMobile from '../assets/codMobile.jpg';
import valorant from "../assets/valorant.jpg"
import fortnite from "../assets/fortnite.jpg"
import pubg from "../assets/pubg.jpg";
import freefire  from "../assets/freefire.jpeg" 
import f1formula  from "../assets/formula1.jpg" 
import worldofwarships from "../assets/worldofwarships.jpg"
import grandtheft from "../assets/grandtheft.jpg"
import minecraft from "../assets/minecraft.jpeg" 
import streetfighter from "../assets/streetfighter.jpeg" 
import asphalt from "../assets/asphalt.jpeg"
import spiderman from "../assets/spiderman.jpeg"
import mutilate from "../assets/mutilate.jpg"
import forza from "../assets/forza.jpg"
import horizon from "../assets/horizon.jpg"
import cyberpunk from "../assets/cyberpunk.jpg"
import assasins from "../assets/assasins.png"
import resident from "../assets/resident.jpg"
import subway from "../assets/subway.jpeg"
import red from "../assets/red.jpeg"
import './Explore.css';

function Explore() {

  const user = useSelector((state) => state.user) ; 
  const games = [
    { id: 1, title: 'COD Mobile', image : codMobile, content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',gamelink:"https://www.callofduty.com/" },
    { id: 2, title: 'Valorant', image : valorant, content: 'Content for another game card.',gamelink:"https://playvalorant.com/en-gb/" },
    { id: 3, title: 'Fortnite ',image : fortnite, content: 'Content for a new game card.',gamelink:"https://www.fortnite.com/?lang=en-US" },
    { id: 4, title: 'World of Warships ',image : worldofwarships, content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',gamelink:"https://worldofwarships.asia/"},
    { id: 5, title: 'PUBG',image : pubg, content: 'Content for another game card.',gamelink:"https://pubg.com/" },
    { id: 6, title: 'Free Fire ',image : freefire, content: 'Content for a new game card.',gamelink:"https://ff.garena.com/" },
    { id: 7, title: 'F1 Formula Race',image : f1formula, content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',gamelink:"https://worldofwarships.asia/" },
    { id: 8, title: 'Grand THeft',image : grandtheft, content: 'Content for another game card.',gamelink:"https://www.rockstargames.com/gta-v" },
    { id: 9, title: 'MineCraft',image : minecraft, content: 'Content for a new game card.',gamelink:"https://www.minecraft.net/" },
    { id: 10, title: 'Street Fighter ',image : streetfighter, content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',gamelink:"https://worldofwarships.asia/" },
    { id: 11, title: 'Asphalt  ',image : asphalt, content: 'Content for another game card.' ,gamelink:"https://www.gameloft.com/game/asphalt-8"},
    { id: 12, title: 'Spider Man ',image : spiderman, content: 'Content for a new game card.',gamelink:"https://www.marvel.com/games/marvels-spider-man-2" },
    { id: 13, title: 'mutilate a doll',image : mutilate, content: 'Content for a new game card.' ,gamelink:"https://www.kongregate.com/games/0rava/mutilate-a-doll-2"},
    { id: 14, title: 'CyberPunk 2077',image : cyberpunk, content: 'Content for a new game card.' ,gamelink:"https://www.cyberpunk.net/"},
    { id: 15, title: 'Forza',image : forza, content: 'Content for a new game card.' ,gamelink:"https://forza.net/horizon"},
    { id: 16, title: 'Resident Evil',image : resident, content: 'Content for a new game card.' ,gamelink:"https://www.residentevil.com/village/en-asia/"},
    { id: 17, title: 'Assasins Creed',image : assasins, content: 'Content for a new game card.' ,gamelink:"https://www.ubisoft.com/en-gb/game/assassins-creed/valhalla"},
    { id: 18, title: 'Horizon',image : horizon, content: 'Content for a new game card.' ,gamelink:"https://www.guerrilla-games.com/games"},
    { id: 19, title: 'Subway Surfers',image : subway, content: 'Content for a new game card.' ,gamelink:"https://subwaysurf.io/subway-surfers-2"},
    { id: 20, title: 'Red Dead Redemption 2',image : red, content: 'Content for a new game card.' ,gamelink:"https://www.rockstargames.com/reddeadredemption2"}
  ]
  const [allCards, setAllCards] = useState(games);
  const [filteredCards, setFilteredCards] = useState(games);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (search) => {
    setSearchTerm(search);
    const filtered = allCards.filter(card =>
      card.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0a0b, rgb(64, 20, 20))' }}>

        {!user && <div className="alert alert-danger"> Please Login  </div>}

        {user && (
          <> 
          
          <div className="animation-container">
        <div className="moving-txt ">
          <h1 className="changeColor">Action Adventure Card Racing Simulation Sports </h1>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <Row>
          <div className="card-group">
          {filteredCards.map((game) => (
  <div key={game.id} className="col-md-3">
    <div className="card m-5" style={{ background: 'linear-gradient(135deg, #7a0a0b, rgb(64, 20, 20))', borderRadius: 30 }}>
    
      
        <img className="card-img-top" src={game.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <p className="card-text">{game.content}</p>
        </div>
    
      <div className="card-footer">
        <Button href = {game.gamelink} >Go to Game</Button>
      </div>
    </div>
  </div>
))}

          </div>
        </Row>
      </div>
          
          </>

        )}

     

    </div>
  );
}

export default Explore;
