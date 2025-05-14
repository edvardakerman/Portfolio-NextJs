import Terminal from './components/terminalHero';
import Gallery from './components/gallery';
import Edvard from './components/edvard';
import projects from './data/projects';
import expertise from './data/expertise';
import PartTwo from './components/partTwo';

export default function Home() {
  return (
    <main>
      <div className='w-[90%] mx-auto'>
        <div className="">
          <div className='flex flex-col h-screen space-y-10 justify-center items-center text-center text-shadow-lg shadow-neutral-950/40'>
            <h1 className='text-3xl sm:text-6xl'>Portfoliouppgift</h1>
            <p className='text-xl sm:text-2xl'>Systemvetares profession: människa, teknik och organisation (725G89)
            </p>
            <p>Edvard Åkerman (edvak514)</p>
            <div className='w-1/3 max-w-[200px]'>
              <img src="../SVP.png" alt="public/SVP.png"/>
            </div>
            <span id='part-one'></span>
          </div>
          
        </div>

        <div>
          <div className="mb-20">
            <h1 className='text-3xl sm:text-4xl text-center text-shadow-lg shadow-neutral-950/40'>Del 1</h1>
          </div>
          <div className='flex justify-center items-center'>
            <Terminal terminalName='Reflektion' terminalClass='text-gray-900 bg-gray-300 border-neutral-300'>
              <div className='space-y-5 mb-5 ml-2 text-xs sm:text-base text-shadow-lg shadow-neutral-950/40'>
                <p>Systemvetarens profession är en dynamisk och mångsidig roll där både en teknisk och analyserande förmåga appliceras för att förbättra verksamheter genom IT. Rollen som systemvetare får ytterligare fler dimensioner om vi ser till definitionen för informatik, som grundar sig i samspelet mellan människa, organisationer och IT. För att utveckla tekniska lösningar behöver alltså kontexten och behoven för systemet identifieras. Baserat på programmets innehåll blir det vidare tydligt hur systemvetaren är bryggan mellan teknik och verksamhet, där ämnen som informationsteknik, systemutveckling och utvecklingsmetodik integreras.</p>
                <p>Modellen för professionell kompetens illustrerar hur en systemvetare aktivt behöver reflektera över sin egen roll. Vilket resonerar väl med en agil utvecklingsmetodik, där systemvetaren ständigt behöver omvärdera processer. Därav blir det tydligt att kompetens inte enbart består av faktakunskaper men också av reflektion och förståelse för mål, värden och motiv samt ditt eget och andras arbete.</p>
                <p>Sammanfattningsvis är systemvetarens profession en mångfacetterad roll i ständig rörelse. Systemvetaren behöver därför ständig utveckling och omvärdering av sin egen kompetens och roll för att kunna hjälpa verksamheter att genomföra digitala transformationer. Systemvetaren är därav djupt beroende av förmågan att utvärdera processer, förstå kontexter och utveckla teknisk kompetens för att lyckas inom sitt område.</p>
              </div>
            </Terminal>
          </div>
        </div>

        <div className="my-32 pt-20">
          <div className="mb-20">
            <h1 className='text-2xl sm:text-3xl text-center text-shadow-lg shadow-neutral-950/40'>Kompetensområden</h1>
          </div>
          <div className='flex justify-center items-center'>
            <Gallery galleryItems={expertise} />
          </div>
        </div>

        <div className="my-32 pt-20">
          <div className="mb-20">
            <h1 className='text-2xl sm:text-3xl text-center text-shadow-lg shadow-neutral-950/40'>Arbetsprov</h1>
          </div>
          <div className='flex justify-center items-center'>
            <Gallery galleryItems={projects} />
          </div>
          <span id='part-two'></span>
        </div>

        <div className='2xl:pt-20'>
          <div className="mb-20">
            <h1 className='text-3xl sm:text-4xl text-center text-shadow-lg shadow-neutral-950/40'>Del 2</h1>
          </div>
          <div className='flex justify-center items-center'>
            <PartTwo />
          </div>
        </div>

      </div >
    </main>
  );
}