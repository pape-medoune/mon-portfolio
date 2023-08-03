import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import  Projet from "./components/projet"
import Contact from "./components/contact";
import './App.css'
import Footer from "./components/footer";

function App() {
  window.addEventListener('scroll', () => {
    var reveal = document.querySelectorAll('.reveal');
    var i;
    for (i = 0; i < reveal.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal[i].getBoundingClientRect().top;
        var compare = 100;

        if (revealTop < (windowHeight - compare)) {
            reveal[i].classList.add('active');
        } else {
            reveal[i].classList.remove('active');
        }
    }
});
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
