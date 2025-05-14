import React from 'react';
import Button from './button';
import Terminal from './terminalHero';

const partTwo = () => {
    return (
        <div className='mb-20'>
            <div className='flex justify-center items-center my-0'>
                <Terminal terminalName='Jobbannons' terminalClass='text-neutral-50 bg-gray-600 border-neutral-600'>
                    <h2 className='text-lg sm:text-2xl mb-1'>Cloud Operations Architect</h2>
                    <p className="ml-2 text-xs sm:text-base text-neutral-600 dark:text-neutral-200 sm:pr-10">
                        Would you like to join one of the fastest-growing organizations within Amazon Web Services (AWS), and help customers of all industries and sizes gain the best value and service from AWS? Cloud Operations Architects (COA) drive our customers’ creative and transformative spirit of innovation across all technologies - including Compute, Storage, Database, Big Data, Application-level Services, Networking, Serverless, Deployment, Security and more. This is not a sales role, but rather an opportunity to be the principal technical advisor and ‘voice of the customer’ to organizations ranging from start-ups to large enterprises in commercial and public sector.
                    </p>
                    <h4 className="mt-5 mb-1 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Qualifications:</h4>
                    <ul className="space-y-1 ml-1 text-gray-500 list-inside dark:text-gray-400 text-xs sm:text-base">
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Experience in a technical, customer-facing role
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Coding/scripting skills (e.g. Python, Java)
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Strong communication and multitasking skills
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Knowledge in 2+ areas (e.g. Cloud, DevOps, Security, Databases)
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Familiar with DevOps tools (Docker, CI/CD, Kubernetes)
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Cloud experience (AWS, Azure, GCP)
                        </li>
                    </ul>
                    <div className='my-4 mb-5'>
                        <Button color={"bg-blue-500"} text={"Hela annonsen"} link={"https://www.amazon.jobs/en/jobs/2927675/cloud-operations-architect-eu-north-emea?cmpid=SPLICX0248M&ss=paid&utm_campaign=cxro&utm_content=job_posting&utm_medium=social_media&utm_source=linkedin.com"} />
                    </div>
                </Terminal>
            </div>

            <div className="pt-20">
                <Terminal terminalName='Kvalifikationer' terminalClass='text-gray-900 bg-gray-300 border-neutral-300'>
                    <h4 className="mb-1 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Varför passar min profil rollen?</h4>
                    <p className='mb-5 ml-2 text-xs sm:text-base text-shadow-lg shadow-neutral-950/40'>Man kan argumentera för att jag redan har mött 3/6 kvalifikationer som rollen kräver tack vare tidigare erfarenheter och min utbildning på systemvetenskapliga programmet. Genom mitt företagande har jag t.ex fått erfarenhet av att jobba mot kunder direkt där jag har hjälpt dem att välja rätt teknik för deras projekt. Kurser inom SVP har fördjupat mina kompetenser inom både Java och Python genom att bland annat ha utvecklat objektorienterade spel. Det är svårt att argumentera för mjuka skills som kommunikation och multitasking men det är ändå något som jag skaffat mig genom mina studier och mitt företagande. Vidare har jag även gulmarkerat två punkter som jag anser att jag har erfarenhet inom men som inte helt lever upp till kraven. Eftersom att rollen kräver kunskaper inom 2+ och jag enbart har erfarenhet av säkerhet och databaser faller jag kort. Det samma gäller för verktyg inom DevOps som jag enbart har stött på vid enstaka tillfällen.</p>
                    <ul className="space-y-1 ml-1 mb-5 text-gray-500 list-inside dark:text-gray-400 text-xs sm:text-base">
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Experience in a technical, customer-facing role
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Coding/scripting skills (e.g. Python, Java)
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Strong communication and multitasking skills
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-yellow-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Knowledge in 2+ areas (e.g. Cloud, DevOps, Security, Databases)
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-yellow-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Familiar with DevOps tools (Docker, CI/CD, Kubernetes)
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-gray-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Cloud experience (AWS, Azure, GCP)
                        </li>
                    </ul>

                </Terminal>
            </div>
            <div className='pt-20'>
                <Terminal terminalName='Vidareutveckling' terminalClass='text-neutral-50 bg-gray-400 border-neutral-400'>
                    <h4 className="mb-1 text-base sm:text-lg font-semibold text-shadow-lg">Hur kan jag förbättra min profil?</h4>
                    <div className='space-y-5 mb-5 ml-2 text-xs sm:text-base text-shadow-lg shadow-neutral-950/40'>
                        <p>Kvalifikationerna som jag saknar blir därav erfarenhet av molnet samt verktyg inom DevOps. För att förvärva dessa behöver jag arbeta aktivt med dem ute i arbetslivet. Ett bra sätt att komma igång är genom certifikat som cloud-providers erbjuder, några exempel som är bra för nybörjare är AZ-500, AWS Certified Cloud Practitioner (CCP) och Associate Certification. Genom att ta certifieringar ökar man inte enbart sin egen kompetens men även möjligheten att jobba med molntjänster ute i arbetslivet, något som verkligen ger erfarenhet. </p>
                        <p>Dessutom behöver jag utveckla mina kompetenser inom DevOps, något som jag har begränsade tidigare erfarenheter av. Jag anser främst att sådan kunskap förvärvas genom att praktiskt jobba med DevOps, vilket är varför jag behöver söka mig till uppdrag och projekt där jag kan få just det. Det gäller både i och utanför arbetslivet där jag behöver genomföra projekt där verktyg som Docker, CI/CD och Kubernetes ingår.</p>
                        <p>Genom att fortsätta utveckla min egen profil med kompetenser inom molnet och DevOps kan jag se till att möta kvalifikationerna som krävs för COA. Dessutom behöver jag självklart också jobba vidare med mina nuvarande erfarenheter för att de fortsatt ska vara aktuella.
                        </p>
                    </div>
                </Terminal>
            </div>
        </div>
    );
};

export default partTwo;