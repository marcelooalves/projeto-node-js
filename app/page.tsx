import Image from "next/image";
import logoSVG from '../app/assets/logo.svg';
import airplaneSVG from '../app/assets/airplane.svg';
import Link from "next/link";

export default function Home() {
  return (
    // Tudo deve estar dentro desta div principal
    <div>
      <section id="hero" className="h-screen w-full bg-stone-100 flex flex-col max-w-7xl mx-auto p-8">
        <nav className="w-full max-w-5x1 flex items-center justify-between">

          <Link href="/">
          <Image 
          className="w-14 h-14"
            src={logoSVG}
            alt="Ilustração de um avião dando a volta ao planeta."
            
          />
          </Link>
          <div className="flex gap-8 items-center"  >

          <Link href="#hero" className="font-medium text-stone-800 hover:text-fuchsia-500"> Preço</Link>
          <Link href="#hero" className="font-medium text-stone-800 hover:text-fuchsia-500">Sobre</Link>
          <Link href="#hero" className="font-medium text-stone-800 hover:text-fuchsia-500">Blog</Link>
          <Link href="#hero" className="font-medium text-white bg-fuchsia-500 hover:bg-fuchsia-700 px-5 py-3 rounded-full">Começar</Link>
          </div>

          
          
        </nav> 
        <div className="flex mt-8 w-full items-center justify-between">

        <div>
      
        <h1 className="text-left font-bold text-7xl text-stone-800">Planeje sua viagem com <span className="text-fuchsia-500">AirPlane</span>.</h1>
        <p className="mt-8 mb-7 text-lg font-bold text-stone-700">
           Nunca foi tão fácil planejar uma viagem. <br/>
           Faça tudo de forma eficaz e sem dor de cabeça!
        </p>
        <Link href="#hero" className="ml-25 font-medium w-fit mb-500 text-white bg-fuchsia-500 hover:bg-fuchsia-700 px-5 py-3 rounded-full">Comece aqui!</Link>
        </div>
      
        <Image 
        className="w-full max-w-2xl"
          src={airplaneSVG}
          alt="Ilustração de um avião no planeta terra!"/>
        </div>
        
      </section>
    </div>
  );
}
