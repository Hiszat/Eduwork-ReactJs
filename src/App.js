import './App.css';
import avatar from './assets/avatar.jpg'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'
import project1 from './assets/project-1.jpg'
import project2 from './assets/project-2.jpg'

function App() {
  return (
    <div className="App">
      <nav className="nav container void-background">
        <div className="nav-left">
          <a href="http://medium.com/@hassanhelfi/" className="nav-item">
            <span className="icon">
              <i className="fa fa-medium"></i>
            </span>
          </a>
          <a href="http://github.com/helfi92" className="nav-item">
            <span className="icon">
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a href="https://twitter.com/hassanhelfi" className="nav-item">
            <span className="icon">
              <i className="fa fa-twitter"></i>
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

      <section id="about" className="section section-1">
        <div className="container has-text-centered">
          <img className="avatar" src={avatar} alt='profile' />
        </div>
        <div className="container">
          <p className="intro">
            Lorem Khaled Ipsum is a major key to success. To succeed you must believe. When you believe, you will succeed. Mogul talk. Find peace, life is like a water fall, you’ve gotta flow. Lion! Fan luv. Eliptical talk.
          </p>
        </div>
      </section>

      <section  id="projects" className="section section-2">
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

      <section id="social" className="section section-3">
        <div className="container">
          <div className="has-text-centered">					
            <h3 className="title is-3">Let's Socialize</h3>
          </div>
          <div className="social-container columns">
           <div className="column is-6 has-text-centered">
              <a target="_blank" rel='noreferrer' href="https://ca.linkedin.com/in/hassan-ali-6132468a">
                <img className="" src={linkedin} alt="LinkedIn" />
              </a>
            </div>
            <div className="column is-6 has-text-centered">
              <a target="_blank" rel='noreferrer' href="https://www.facebook.com/Hassan.Helfi">
                <img className="" src={facebook} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </section>	
      
      <section className="section-4 has-text-centered container">
        <a href="http://www.hassanali.me/about">Hassan Ali</a>
      </section>
    </div>
  );
}



export default App;
