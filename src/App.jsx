import React, { useState } from "react";
import "./App.css";
import Characterpages from "./pages/Characterpages";

const App = () => {
 const marvelCharacters = [
  {
    id: 1,
    name: "Iron Man",
    realName: "Tony Stark",
    power: "Powered Armor Suit",
    team: "Avengers",
    weapon: "Repulsor Beams",
    image: "https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man.webp"
  },
  {
    id: 2,
    name: "Captain America",
    realName: "Steve Rogers",
    power: "Super Soldier Strength",
    team: "Avengers",
    weapon: "Vibranium Shield",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9zhL1Rk2BCCwE8KdhcEwin_1WUc96-XAxQ&s"
  },
  {
    id: 3,
    name: "Thor",
    realName: "Thor Odinson",
    power: "God of Thunder",
    team: "Avengers",
    weapon: "Mjolnir",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-NFsaQaZoZ8GObbN7KaGEqIkAlJTEZWUrQ&s"
  },
  {
    id: 4,
    name: "Hulk",
    realName: "Bruce Banner",
    power: "Super Strength",
    team: "Avengers",
    weapon: "Raw Strength",
    image: "https://www.pixelstalk.net/wp-content/uploads/images3/Download-Hulk-iPhone-Wallpaper-Free-1.jpg"
  },
  {
    id: 5,
    name: "Spider-Man",
    realName: "Peter Parker",
    power: "Spider Sense",
    team: "Avengers",
    weapon: "Web Shooters",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIDPhZF3zaca20wvkylKcOk5g8SliMJuZoQ&s"
  },
  {
    id: 6,
    name: "Black Widow",
    realName: "Natasha Romanoff",
    power: "Master Spy",
    team: "Avengers",
    weapon: "Widow's Bite",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSjB7TDMloMRx1dnYVp-TGo1bBCM0wOFZyw&s"
  },
  {
    id: 7,
    name: "Doctor Strange",
    realName: "Stephen Strange",
    power: "Mystic Arts",
    team: "Avengers",
    weapon: "Magic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHZzxFpiinYD7of0LIkXngLJjeJdtTaA0NQ&s"
  },
  {
    id: 8,
    name: "Black Panther",
    realName: "T'Challa",
    power: "Enhanced Strength",
    team: "Avengers",
    weapon: "Vibranium Suit",
    image: "https://cdn.britannica.com/26/182826-050-0FEF618D/publicity-poster-Black-Panther-character-Tchalla-Black-Ryan-2017.jpg"
  },
  {
    id: 9,
    name: "Scarlet Witch",
    realName: "Wanda Maximoff",
    power: "Chaos Magic",
    team: "Avengers",
    weapon: "Reality Manipulation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZrAx4xT1QeXwDoKabWlyx5utmZpeDt1fPTA&s"
  },
  {
    id: 10,
    name: "Hawkeye",
    realName: "Clint Barton",
    power: "Master Archer",
    team: "Avengers",
    weapon: "Bow and Arrow",
    image: "https://nearcompleteset.com/wp-content/uploads/2020/07/hawkeyemcu00b.jpg?w=400"
  }
];

  const [character] = useState(marvelCharacters);
  const [page, setpage] = useState(1);

  return (
    <Characterpages
      character={character}
      page={page}
      setpage={setpage}
    />
  );
};

export default App;