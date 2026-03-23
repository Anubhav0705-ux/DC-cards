import React, { useState } from "react";
import "./App.css";
import Characterpages from "./pages/Characterpages";

const App = () => {

const dcCharacters = [ /* --- keep your 24 character array EXACTLY same --- */ 
  { id:1, name:"Batman", realName:"Bruce Wayne", power:"Peak Human Intelligence", team:"Justice League", weapon:"Batarang", image:"https://wallpapercat.com/w/full/5/6/1/2104938-1080x1920-iphone-full-hd-batman-background.jpg" },
  { id:2, name:"Superman", realName:"Clark Kent", power:"Kryptonian Powers", team:"Justice League", weapon:"Heat Vision", image:"https://c4.wallpaperflare.com/wallpaper/353/690/516/superman-batman-v-superman-dawn-of-justice-man-of-steel-dc-comics-wallpaper-preview.jpg" },
  { id:3, name:"Wonder Woman", realName:"Diana Prince", power:"Amazonian Strength", team:"Justice League", weapon:"Lasso of Truth", image:"https://wallpapercave.com/wp/wp3864475.jpg" },
  { id:4, name:"Flash", realName:"Barry Allen", power:"Speed Force", team:"Justice League", weapon:"Lightning Speed", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUy5qC1jW_Rd0jBNQ0ZSZAGLqrMIgrx56m2A&s" },
  { id:5, name:"Aquaman", realName:"Arthur Curry", power:"Atlantean Strength", team:"Justice League", weapon:"Trident", image:"https://images7.alphacoders.com/973/thumb-1920-973272.jpg" },
  { id:6, name:"Green Lantern", realName:"Hal Jordan", power:"Power Ring", team:"Justice League", weapon:"Energy Constructs", image:"https://i.pinimg.com/736x/a0/7f/db/a07fdba5b2f1c6279a175d76f9912ee5.jpg" },
  { id:7, name:"Cyborg", realName:"Victor Stone", power:"Cybernetic Tech", team:"Justice League", weapon:"Tech Blasters", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxFUoaCYmS7D8Z_OZAdcsyj_JfISJq9BJXg&s" },
  { id:8, name:"Shazam", realName:"Billy Batson", power:"Magic Lightning", team:"Justice League", weapon:"Lightning", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMs7wmZIb6Bj7Y7OWrDRQVS2QTq-8YTDmAw&s" },
  { id:9, name:"Nightwing", realName:"Dick Grayson", power:"Acrobatics", team:"Bat Family", weapon:"Escrima Sticks", image:"https://4kwallpapers.com/images/wallpapers/nightwing-dc-1080x1920-12327.jpeg" },
  { id:10, name:"Supergirl", realName:"Kara Zor-El", power:"Kryptonian Powers", team:"Justice League", weapon:"Heat Vision", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHx5clGjX6wcCKWfGSW6nxswd7kjP7uPIXg&s" },
  { id:11, name:"Green Arrow", realName:"Oliver Queen", power:"Master Archer", team:"Justice League", weapon:"Bow & Arrow", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkMfBtyEo_OjIdXNK9mkJNZeMGmZfEaYuuA&s" },
  { id:12, name:"Martian Manhunter", realName:"J'onn J'onzz", power:"Shape Shifting", team:"Justice League", weapon:"Telepathy", image:"https://comicvine.gamespot.com/a/uploads/original/0/77/1433649-martian_manhunter.jpg" },
  { id:13, name:"Raven", realName:"Rachel Roth", power:"Dark Magic", team:"Teen Titans", weapon:"Soul Self", image:"https://images.alphacoders.com/613/613408.jpg" },
  { id:14, name:"Beast Boy", realName:"Garfield Logan", power:"Animal Transformation", team:"Teen Titans", weapon:"Shapeshifting", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndxL-ZthhD98A3Jg7ElaVxC9NSZMgPKZ4eQ&s" },
  { id:15, name:"Harley Quinn", realName:"Harleen Quinzel", power:"Agility", team:"Suicide Squad", weapon:"Baseball Bat", image:"https://images6.alphacoders.com/992/thumb-1920-992261.jpg" },
  { id:16, name:"Deathstroke", realName:"Slade Wilson", power:"Enhanced Reflexes", team:"Mercenary", weapon:"Sword", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVh8hT7YFo180C9QF24sSNO96GS2vkcbC9w&s" },
  { id:17, name:"Batgirl", realName:"Barbara Gordon", power:"Elite Hacker", team:"Bat Family", weapon:"Batarang", image:"https://i.ebayimg.com/images/g/x3QAAOSwryBgUC6U/s-l1200.png" },
  { id:18, name:"Blue Beetle", realName:"Jaime Reyes", power:"Alien Armor", team:"Justice League", weapon:"Scarab Suit", image:"https://64.media.tumblr.com/fded5fda529f1c2e9d15b683ca894cd9/f1c6e846f3c3a513-23/s1280x1920/4f005daf37e6a246965fbf4f24426b4fa50137cf.jpg" },
  { id:19, name:"Constantine", realName:"John Constantine", power:"Occult Magic", team:"Justice League Dark", weapon:"Dark Spells", image:"https://static0.srcdn.com/wordpress/wp-content/uploads/2018/10/John-Constantine-in-Wonder-Woman-57-The-Witching-Hour.jpg?w=1200&h=900&fit=crop" },
  { id:20, name:"Black Canary", realName:"Dinah Lance", power:"Canary Cry", team:"Justice League", weapon:"Sonic Scream", image:"https://wallpapercave.com/wp/wp2554325.jpg" },
  { id:21, name:"Robin", realName:"Damian Wayne", power:"Martial Arts", team:"Bat Family", weapon:"Sword", image:"https://i.pinimg.com/736x/18/ae/73/18ae73b4379ae180d2f825d9c468fe28.jpg" },
  { id:22, name:"Zatanna", realName:"Zatanna Zatara", power:"Magic Spells", team:"Justice League Dark", weapon:"Spellcasting", image:"https://w0.peakpx.com/wallpaper/227/621/HD-wallpaper-zatanna-dc-universe-zatanna-superheroes-artist-artwork-digital-art.jpg" },
  { id:23, name:"Red Hood", realName:"Jason Todd", power:"Combat Mastery", team:"Outlaws", weapon:"Dual Pistols", image:"https://wallpapercave.com/wp/wp5034684.jpg" },
  { id:24, name:"Darkseid", realName:"Uxas", power:"Omega Beams", team:"Apokolips", weapon:"Omega Effect", image:"https://images7.alphacoders.com/109/thumb-1920-1096648.jpg" }
];

const [page, setpage] = useState(1);
const perPage = 8;
const totalPages = Math.ceil(dcCharacters.length / perPage);

const currentCharacters = dcCharacters.slice(
  (page - 1) * perPage,
  page * perPage
);

return (
  <Characterpages
    character={currentCharacters}
    page={page}
    setpage={setpage}
    totalPages={totalPages}
  />
);
};

export default App;