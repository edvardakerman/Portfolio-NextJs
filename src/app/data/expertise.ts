import { GalleryItem } from '../models/galleryItem';

const expertise: GalleryItem[] = [
  {
    title: "Webbutveckling",
    desc: "En tidigare utbildning inom webb- och fullstackutveckling har givit mig goda kunskaper inom området för att kunna förstå och utveckla egna webbaserade applikationer. Som en fullstackutvecklare har jag förvärvat kompetens för bland annat backendsystem med databaser och API:er, säker autentisering och frontendutveckling. Jag har jobbat med flera tekniker som till exempel ramverken React och NodeJS, programmeringsspråken Javascript, SQL och PHP samt verktyg som Git och Docker.",
    image: "../tools.png",
    type: "image",
    rating: {
      score: 3
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
    title: "Objektorienterad utveckling",
    desc: "Genom flera kurser och egna projekt inom OOP har jag lärt mig att effektivt utveckla objektorienterade system. Mina erfarenheter har givit mig en bra förståelse för en klasstruktur med principer som inkapsling, arv och polymorfism. Därav kan jag både förstå och designa egna klasstrukturer, något som jag har tagit med mig in i mina projekt.",
    image: "../OOP.png",
    type: "image",
    rating: {
      score: 2
    },
    tags: [{
      text: "OOP",
      color: "bg-yellow-100 text-yellow-900"
    }
    ]
  },
  {
    title: "Företagare",
    desc: "För ungefär ett år sedan startade jag tillsammans med två andra upp ett företag inom utveckling. Idag utvecklar vi webbaserade system åt våra kunder för att stödja deras verksamheter. Det har både gett mig erfarenheter av att driva företag men även av att jobba med kundens behov för att kunna leverera tekniska lösningar. Jag har därtill hjälpt kunder genom att utveckla systemlösningar som möter nuvarande och framtida verksamhetskrav.",
    image: "../steve.png",
    type: "image",
    rating: {
      score: 2
    },
    tags: [{
      text: "Buisiness",
      color: "bg-gray-100 text-gray-800"
    }]
  },
  {
    title: "Informationssäkerhet",
    desc: "Jag har en god förståelse för grunderna inom informationssäkerhet där jag bland annat studerat CIA-triaden (konfidentialitet, integritet och tillgänglighet). Därtill har jag arbetat med riskanalys, säker kommunikation och hantering av känslig information. Genom min kännedom om vanliga hot och sårbarheter vet jag hur dessa kan förebyggas genom bland annat kryptering och accesskontroll. Mina studier har även givit mig kunskaper inom relevanta standard och riktlinjer.",
    image: "../compsec.png",
    type: "image",
    rating: {
      score: 3
    },
    tags: [{
      text: "Security",
      color: "bg-blue-100 text-blue-800"
    }]
  },

]

export default expertise;