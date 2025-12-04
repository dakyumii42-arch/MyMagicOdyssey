import { useState, useEffect } from 'react';
import '../App.css';
import imagen1 from '../assets/lv1.webp';
import imagen2 from '../assets/lv2.webp';
import imagen3 from '../assets/lv3.webp';
import teamp from '../assets/teamp.png';
import p1 from '../assets/pergamino.png';

import c1 from '../assets/carrusel/1.webp';
import c2 from '../assets/carrusel/2.webp';
import c3 from '../assets/carrusel/3.webp';
import c4 from '../assets/carrusel/4.webp';

import tti from '../assets/icnos/tt.png';
import discordIcon from '../assets/icnos/discordIcon.png';
import xIcon from '../assets/icnos/X_icon.png';
import xIcon2 from '../assets/icnos/X_icon2.png';
import fcIcon from '../assets/icnos/fcicon.png';
import ficon from '../assets/icnos/ficon.png';
import pi from '../assets/icnos/pp.png';
import xIdiscoIcon from '../assets/icnos/discordicon2.png';


import GlareHover from '../Animations/GlareHover/GlareHover.jsx';
import '../Animations/GlareHover/GlareHover.css';


function App() {
  const [index, setIndex] = useState(0);

  const togglePanel = (button, panel) => {
  if (isMobile) {
    return; // 🚫 No abrir en celular
  }

  if (panel.classList.contains("open")) {
    button.classList.remove("open");
    panel.classList.remove("open");
  } else {
    button.classList.add("open");
    panel.classList.add("open");
  }
};



  

  const images = [c1, c2, c3, c4]; // 🔹 agrega las imágenes que quieras

  
  // --- Carrusel de imágenes (lo que ya tenías, sin tocar) ---
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 5000); // cambia cada 5 segundos
  return () => clearInterval(interval);
}, [images.length]);

const [isMobile, setIsMobile] = useState(false);

// Detectar si es móvil
useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth <= 768);
  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);
// --- Animación secuencial de panels al cargar la página ---
useEffect(() => {
  if (isMobile) return; // 🚫 No animar en celular

  const panels = document.querySelectorAll(".circle-panel");
  if (!panels.length) return; // Si no existen, no hacer nada

  let panelIndex = 0;
  const timeouts = [];

  function animatePanels() {
    if (panelIndex >= panels.length) return;

    const panel = panels[panelIndex];
    const button = panel.parentElement.querySelector(".circle-btn");

    // abrir
    button.classList.add("open");
    panel.classList.add("open");

    // cerrar después de 1000 ms
    const tClose = setTimeout(() => {
      panel.classList.remove("open");
      button.classList.remove("open");

      panelIndex++;

      // abrir el siguiente con pequeño retraso
      const tNext = setTimeout(animatePanels, 400);
      timeouts.push(tNext);
    }, 1000);

    timeouts.push(tClose);
  }

  // pequeño delay inicial
  const tStart = setTimeout(animatePanels, 900);
  timeouts.push(tStart);

  // cleanup
  return () => timeouts.forEach((t) => clearTimeout(t));
}, [isMobile]);



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





        <div className="left-buttons">

  <div className="btn-wrapper">
  <button
  className="circle-btn"
  style={{ backgroundImage: `url(${ficon})` }}
  onClick={(e) => {
    const btn = e.currentTarget;
    const panel = btn.parentElement.querySelector(".circle-panel");
    togglePanel(btn, panel);
    window.open("https://www.facebook.com/share/1aLYJUyZLE/", "_blank");
  }}
></button>
<div className="circle-panel" style={{backgroundColor: "#3a89ffff"}}>FB'S PAGE</div>
</div>



  <div className="btn-wrapper">
  <button
  className="circle-btn"
  style={{ backgroundImage: `url(${xIcon2})` }}
  onClick={(e) => {
    const btn = e.currentTarget;
    const panel = btn.parentElement.querySelector(".circle-panel");
    togglePanel(btn, panel);
    window.open("https://x.com/DlrfMimikyu?t=m7zyLyARNZsp2d_-idywdw&s=09", "_blank");

  }}
></button>
<div className="circle-panel" style={{backgroundColor: "#2c2c2cff"}}>X CHANNEL</div>
</div>

  <div className="btn-wrapper">
  <button
  className="circle-btn"
  style={{ backgroundImage: `url(${xIdiscoIcon})` }}
  onClick={(e) => {
    const btn = e.currentTarget;
    const panel = btn.parentElement.querySelector(".circle-panel");
        togglePanel(btn, panel);
        window.open("https://discord.gg/7UwxRYfA", "_blank");
  }}
></button>
<div className="circle-panel" style={{backgroundColor: "#9669ffff"}}>DISCORD</div>
</div>

<div className="btn-wrapper">
  <button
  className="circle-btn"
  style={{ backgroundImage: `url(${pi})` }}
  onClick={(e) => {
    const btn = e.currentTarget;
    const panel = btn.parentElement.querySelector(".circle-panel");
    window.open("https://www.patreon.com/cw/L_Y_F_", "_blank");
    
    togglePanel(btn, panel);
  }}
></button>
<div className="circle-panel" style={{backgroundColor: "#ff3c46ff"}}>PATREON</div>
</div>

<div className="btn-wrapper">
  <button
  className="circle-btn"
  style={{ backgroundImage: `url(${tti})` }}
  onClick={(e) => {
    const btn = e.currentTarget;
    const panel = btn.parentElement.querySelector(".circle-panel");
    togglePanel(btn, panel);

    window.open("https://www.tiktok.com/@mmky_42?_r=1&_t=ZS-91QPY7TcF4X", "_blank");
  }}
></button>
<div className="circle-panel" style={{backgroundColor: "#b34592ff"}}>TIKTOK</div>
</div>

</div>



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
            <li>• New chapter available.</li>
            <li>• The Discord server is open/launched.</li>
            <li>• Fanart event underway.</li>
            <li>• Character update.</li>
            <li>• New spin-off in development.</li>
            <li>• Maintenance on Sunday.</li>

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