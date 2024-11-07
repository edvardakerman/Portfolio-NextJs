import Terminal from './components/terminalHero';
import Projects from './components/projectGallery';
import Education from './components/eduGallery';
import Edvard from './components/edvard';

export default function Home() {
  return (
    <main>
      <div className='w-[90%] py-3 mx-auto'>

        <div className='flex justify-center items-center my-0'>
          <Terminal />
        </div>

        <div className="my-12 flex justify-center items-center">
          <Edvard />
        </div>

        <div className="pt-20" id='projects'>
          <div className="mb-20">
            <h1 className='text-4xl text-center text-shadow-lg shadow-neutral-950/40'>Projets</h1>
            <h4 className='text-sm text-center my-2 text-shadow-lg shadow-neutral-950/50'>Explore my GitHub for more details and to see the projects in action</h4>
          </div>
          <div className='flex justify-center items-center'>
            <Projects />
          </div>
        </div>

        <div className="my-32 pt-20" id='education'>
          <div className="mb-20">
            <h1 className='text-4xl text-center '>Education</h1>
            <h4 className='text-sm text-center my-2'>Discover more about my educational background and the skills I've developed.</h4>
          </div>
          <div className='flex justify-center items-center'>
            <Education />
          </div>
        </div>
      </div >
    </main>
  );
}
