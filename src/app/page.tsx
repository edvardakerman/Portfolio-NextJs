import Terminal from './components/terminalHero';
import Projects from './components/projectGallery';
import Education from './components/eduGallery';
import Footer from './components/footer';
import Edvard from './components/edvard';
import ContactForm from './components/contactForm';
import Navbar from "./components/Navbar";

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

        <div className="pt-20" id='projekt'>
          <div className="mb-20">
            <h1 className='text-4xl text-center text-shadow-lg shadow-neutral-950/40'>Mina Projekt</h1>
            <h4 className='text-sm text-center my-2 text-shadow-lg shadow-neutral-950/50'>Klicka på ett projekt för att läsa mer</h4>
          </div>
          <div className='flex justify-center items-center'>
            <Projects />
          </div>
        </div>

        <div className="my-32 pt-20" id='utbildning'>
          <div className="mb-20">
            <h1 className='text-4xl text-center '>Min utbildning</h1>
            <h4 className='text-sm text-center my-2'>Klicka på en utbildning för att läsa mer</h4>
          </div>
          <div className='flex justify-center items-center'>
            <Education />
          </div>
        </div>

        <div className="mt-32 pt-20" id='kontakt'>
          <div className=" sm:mb-20">
            <h1 className='text-4xl text-center'>Kontakta mig</h1>
            <h4 className='text-sm text-center my-2'>Ser min portfolio intressant ut? Kontakta mig!</h4>
          </div>
          <div className='flex justify-center items-center w-full'>
            <ContactForm />
          </div>
        </div>
      </div >
    </main>
  );
}
