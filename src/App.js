import { useState, useEffect } from 'react';
import './App.css';
import imagen1 from './assets/lv1.jpg';
import imagen2 from './assets/lv2.jpg';
import imagen3 from './assets/lv3.jpg';
import teamp from './assets/teamp.png';
import p1 from './assets/pergamino.png';

import c1 from './assets/carrusel/1.jpg';
import c2 from './assets/carrusel/2.jpg';
import c3 from './assets/carrusel/3.jpg';
import c4 from './assets/carrusel/4.jpg';

import discordIcon from './assets/icnos/discordIcon.png';
import xIcon from './assets/icnos/X_icon.png';
import fcIcon from './assets/icnos/fcicon.png';

import GlareHover from './Animations/GlareHover/GlareHover.jsx';
import './Animations/GlareHover/GlareHover.css';


function App() {
  const [index, setIndex] = useState(0);

  const images = [c1, c2, c3, c4]; // 🔹 agrega las imágenes que quieras

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="App" style={{ backgroundImage: `url(${imagen1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <header className="navbar">
        <div className="logo">MY MAGIC ODYSSEY</div>
        <nav>
          <button className="btn small">notify me!</button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="blue-title">WINNERS!</h2>
          <div className="blue-box">
            
            <div className="fade-image">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`slide-${i}`}
                    className={i === index ? "active" : ""}
                  />
                ))}
              </div>

          </div>

          <div className="green-box">
            <h3 className="green-text">Send in your fan art and it will appear here!</h3>
            <button className="btn small green-btn">Click me</button>
          </div>

        </div>

        <div className="lightblue-box">
          <img src={teamp} alt="Lightblue Box Content" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0px' }} />
        </div>
      </section>
      
      
       

      <section className="features">

        {/* NOTICIAS */}
      <div className="news-section">
        <div className="news-box"
        style={{
            backgroundImage: `url(${p1})`,
            backgroundSize: "117% 106%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}

        >
        
          <h2>UPDATES</h2>
          <ul>
            <li>• Nuevo capítulo disponible.</li>
            <li>• Se abrió el servidor de Discord.</li>
            <li>• Próximamente: tráiler animado.</li>
            <li>• Evento de fanarts en marcha.</li>
            <li>• Actualización de personajes.</li>
            <li>• Nuevo spin-off en desarrollo.</li>
            <li>• Mantenimiento el domingo.</li>
          </ul>
        </div>
      </div>



        <section className="features1">
        <h3>  EXPLORE!</h3>
        <div className="cards">
                

          <div>
  <button className="glare-card" style={{ all: 'unset', cursor: 'pointer', width: '250px', height: '380px', position: 'relative', backgroundImage: `url(${imagen1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', transition: 'transform 0.3s ease', borderRadius: '15px', overflow: 'hidden', border: 'none', backgroundColor: 'transparent', boxShadow: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={true}
    >
      <h2 style={{ fontSize: '1rem', fontWeight: '550', color: '#ffffffff', margin: 0, backgroundColor: '#ff004cff', borderRadius: '25px', padding: '5px' }}>
        LIGHT NOVEL
      </h2>
    </GlareHover>
  </button>
</div>

          <div>
  <button className="glare-card" style={{ all: 'unset', cursor: 'pointer', width: '250px', height: '380px', position: 'relative', backgroundImage: `url(${imagen2})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', transition: 'transform 0.3s ease', borderRadius: '15px', overflow: 'hidden', border: 'none', backgroundColor: 'transparent', boxShadow: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={true}
    >
      <h2 style={{ fontSize: '1rem', fontWeight: '550', color: '#ffffffff', margin: 0, backgroundColor: '#ff004cff', borderRadius: '25px', padding: '5px' }}>
        MANGA
      </h2>
    </GlareHover>
  </button>
</div>

          <div> 
  <button className="glare-card" style={{ all: 'unset', cursor: 'pointer', width: '250px', height: '380px', position: 'relative', backgroundImage: `url(${imagen3})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', transition: 'transform 0.3s ease', borderRadius: '15px', overflow: 'hidden', border: 'none', backgroundColor: 'transparent', boxShadow: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={true}
    >
      <h2 style={{ fontSize: '1rem', fontWeight: '550', color: '#ffffffff', margin: 0, backgroundColor: '#ff004cff', borderRadius: '25px', padding: '5px' }}>
        GAMES
      </h2>
    </GlareHover>
  </button>
</div>

        </div>
      </section>

      </section>

      <footer>
        <button className="icon-button">
          <img src={discordIcon} alt="Icon 1" />
        </button>
        <button className="icon-button">
          <img src={xIcon} alt="Icon 2" />
        </button>
        <button className="icon-button">
          <img src={fcIcon} alt="Icon 3" />
        </button>
      </footer>
    </div>
  );
}

export default App;