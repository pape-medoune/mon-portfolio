import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import  Projet from "./components/projet"
import Contact from "./components/contact";
import './App.css'
import Footer from "./components/footer";

function App() {
  return (
    <div className="overflow-x-hidden text-white ">
        

        <main className="w-full  bg-[#121212] h-fit">
          <Header/>
          <Hero/>
          <About/>
          <Skills/>
          <Projet/>
          <Contact/>
          <Footer/>
        </main>

    </div>
  );
}

export default App;
