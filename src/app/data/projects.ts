import { GalleryItem } from "../models/galleryItem";

const projects: GalleryItem[] = [
  {
    title: "MyAwesomeMovies.com 🍿",
    desc: "The Watchlist project is a Next.js web application where users can sign up to explore movies and track them in personalized watchlists. It allows users to easily manage and organize films they plan to watch or have already seen.",
    image: "../mam.png",
    link: "https://github.com/edvardakerman/Portfolio-NextJs",
    type: "desktop",
    btnText: "Projekt Repo",
    btnStyle: "bg-zinc-700 hover:bg-zinc-800",
    btnIcon: "../git.png",
    extraBtn: {
      text: "MyAwesomeMovies.com",
      link: "https://myawesomeMovies.com",
      class: "bg-red-700 hover:bg-red-900"
    }
  },
  {
    title: "Karallen 🪩",
    desc: "Karallen is an object-oriented Java game built with JavaFX. In this game the player controls a character who tries to catch all the items while also avoiding the bouncer, offering intuitive controls and engaging gameplay.",
    image: "../karallen.png",
    link: "https://github.com/edvardakerman/Karallen",
    type: "desktop",
    btnText: "Projekt Repo",
    btnStyle: "bg-zinc-700 hover:bg-zinc-800",
    btnIcon: "../git.png"
  },
  {
    title: "Edvardakerman.com 🧑‍💻",
    desc: "This portfolio website is built with Next.js and TypeScript, showcasing my work, skills, and projects. It provides an interactive and responsive experience, highlighting my expertise in web development and systems science.",
    image: "../portfolio.png",
    link: "https://github.com/edvardakerman/Portfolio-NextJs",
    type: "desktop",
    btnText: "Projekt Repo",
    btnStyle: "bg-zinc-700 hover:bg-zinc-800",
    btnIcon: "../git.png"
  },
  {
    title: "Galaga 🚀",
    desc: "The Galaga project is an object-oriented Java game built with JavaFX, inspired by the classic arcade shooter. Players control a spaceship to battle waves of enemies, with intuitive controls and retro-style gameplay.",
    image: "../galaga.png",
    link: "https://github.com/edvardakerman/galaga",
    type: "desktop",
    btnText: "Projekt Repo",
    btnStyle: "bg-zinc-700 hover:bg-zinc-800",
    btnIcon: "../git.png"
  },
  {
    title: "Restaurant App 🍔",
    desc: "The Restaurant Search App is a mobile application built with React Native, allowing users to search and filter restaurants based on price, ratings and food. It offers a simple and intuitive interface to help users find dining options that meet their preferences.",
    image: "../foodfinder.png",
    link: "https://github.com/edvardakerman/Restaurant-Search-App",
    type: "phone",
    btnText: "Projekt Repo",
    btnStyle: "bg-zinc-700 hover:bg-zinc-800",
    btnIcon: "../git.png"
  },
  {
    title: "Yatzy 🎲🎲🎲🎲🎲",
    desc: "The Yahtzee game is a terminal-based, object-oriented Python project that supports 1-4 players, allowing for a fun multiplayer experience. Download this game and try it out to enjoy the classic dice game and challenge your friends.",
    image: "../yahtzee.png",
    link: "https://github.com/edvardakerman/Yahzee",
    type: "desktop",
    btnText: "Projekt Repo",
    btnStyle: "bg-zinc-700 hover:bg-zinc-800",
    btnIcon: "../git.png"
  }
];

export default projects;