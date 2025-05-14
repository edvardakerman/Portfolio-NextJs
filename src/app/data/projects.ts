import { GalleryItem } from "../models/galleryItem";

const projects: GalleryItem[] = [
  {
    title: "MyAwesomeMovies.com 🍿",
    desc: "En webbapplikation som tillåter användare att både upptäcka och organisera sina filmer som de har eller ska se. Hemsidan visar exempel på mina kunskaper inom API:er, databaser, säker autentisering och frontendutveckling. Applikationen är byggd i NextJS med supabase som databas och använder sig av det öppna API:et tmdb.",
    image: "../mam.png",
    type: "desktop",
    extraBtn: {
      text: "MyAwesomeMovies.com",
      link: "https://myawesomeMovies.com",
      class: "bg-red-700 hover:bg-red-900"
    },
    tags: [{
      text: "Web",
      color: "bg-red-100 text-red-800"
    }, {
      text: "Database",
      color: "bg-green-100 text-green-800"
    }, {
      text: "Security",
      color: "bg-blue-100 text-blue-800"
    },]
  },
  {
    title: "Kårallen 🪩",
    desc: "Kårallen är ett objektorienterat spel utvecklat i Java. Spelet låter användaren styra sin karaktär för att fånga dryck och samtidigt undvika väktaren till varje pris. Projektet visar på en god förmåga att utveckla program som följer en klasstruktur och användning av inkapsling, arv och polymorfism.",
    image: "../karallen.png",
    type: "desktop",
    tags: [{
      text: "OOP",
      color: "bg-yellow-100 text-yellow-900"
    }, {
      text: "Java",
      color: "bg-orange-100 text-orange-800"
    }, {
      text: "Game",
      color: "bg-purple-100 text-purple-800"
    }]
  },
  {
    title: "Yatzy 🎲🎲🎲🎲🎲",
    desc: "Ett yatzy-spel som stödjer upp till 4 användare, programmerat i python med fokus på objektorientering. Återigen visar detta projekt på en förståelse till OOP där principer som polymorfism nyttjas för att utveckla effektiva och eleganta system. Spelet visar dessutom på mina förmågor inom språket python.",
    image: "../yahtzee.png",
    type: "desktop",
    tags: [{
      text: "OOP",
      color: "bg-yellow-100 text-yellow-900"
    }, {
      text: "Python",
      color: "bg-sky-100 text-sky-800"
    }, {
      text: "Game",
      color: "bg-purple-100 text-purple-800"
    }]
  },
  {
    title: "Etsik hackning i labb 🔐",
    desc: "En labbserie där jag fick hacka i en sandlådsmiljö vilket gav mig goda kunskaper om vanligt förekommande sårbarheter och hot. Vi fick bland annat testa att utnyttja sårbarheter inom Cross Site Scripting, SQL-injektioner och Cross Site Request Forgery. Genom den praktiska erfarenheten av hur sårbarheter kan utnyttjas har jag nu en bra förståelse för hur man förebygger dem.",
    image: "../zap.png",
    type: "desktop",
    tags: [{
      text: "Security",
      color: "bg-blue-100 text-blue-800"
    }]
  }

];

export default projects;