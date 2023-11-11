import './App.css';
import avatar from './assets/avatar.jpg'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'
import project1 from './assets/project-1.jpg'
import project2 from './assets/project-2.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Project />
      <Social />
      <Footer />
    </div>
  );
}


function Navbar() {
  return (
    <nav className="nav container void-background">
        <div className="nav-left">
          <a href="https://www.linkedin.com/in/muhammad-hiszat/" className="nav-item">
            <span className="icon">
              <i className="fa fa-linkedin"></i>
            </span>
          </a>
          <a href="https://github.com/Hiszat" className="nav-item">
            <span className="icon">
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a href="https://facebook.com/izatgtg/" className="nav-item">
            <span className="icon">
              <i className="fa fa-facebook"></i>
            </span>
          </a>				
        </div>
        <div className="nav-right nav-menu">
          <a className="nav-item" href="#about">About</a>
          <a className="nav-item" href="#projects">Projects</a>
          <a className="nav-item" href="#social">Social</a>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
    </nav>
  );
}

function About(){
  return (
    <section id="about" className="section section-1">
        <div className="container has-text-centered">
          <img className="avatar" src={avatar} alt='profile' />
        </div>
        <div className="container">
          <p className="intro">
            Saya Muhammad Hiszat. Saya berkuliah di STMIK KAPUTAMA, Binjai. Saya sangat menyukai bermain game, belajar ngoding dan sedang mendalami Web Developer dan Game Developer. 
          </p>
        </div>
    </section>
  );
}

function Project(){
  return (
    <section id="projects" className="section section-2">
      <div className="container">
        <div className="has-text-centered">
          <h3 className="title is-3">Projects</h3>
        </div>
        
        <div className="columns is-multiline is-desktop">
          <div className="column">
            <div className="box project-text">
              <article>
                <div>
                  <figure className="image project-figure">
                    <img src={project1} alt="Project1"/>
                  </figure>
                </div>
                <div>			
                  <p>
                    They don't want us to eat. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="column">
            <div className="box project-text">
              <article>
                <div>
                  <figure className="image project-figure">
                    <img src={project2} alt='Project2'/>
                  </figure>
                </div>
                <div>			
                  <p>
                    Bless up. Another one. How’s business? Boomin. Don’t ever play yourself. Life is what you make it, so let’s make it.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Social(){
  return (
    <section id="social" className="section section-3">
      <div className="container">
        <div className="has-text-centered">					
          <h3 className="title is-3">Let's Socialize</h3>
        </div>
        <div className="social-container columns">
         <div className="column is-6 has-text-centered">
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/muhammad-hiszat/">
              <img className="" src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          <div className="column is-6 has-text-centered">
            <a target="_blank" rel='noreferrer' href="https://facebook.com/izatgtg/">
              <img className="" src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </section>	
  );
}


function Footer(){
  return (
    <section className="section-4 has-text-centered container">
        <a href="#about">Muhammad Hiszat</a>
    </section>
  );
}
export default App;
