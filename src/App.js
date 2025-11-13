import { useState, useEffect } from 'react';
import './App.css';
import imagen1 from './assets/lv1.jpg';
import imagen2 from './assets/lv2.jpg';
import imagen3 from './assets/lv3.jpg';

import c1 from './assets/carrusel/1.jpg';
import c2 from './assets/carrusel/2.jpg';
import c3 from './assets/carrusel/3.jpg';
import c4 from './assets/carrusel/4.jpg';


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
    <div className="App">
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
      </section>

      <section className="features">
        <h3>EXPLORE!</h3>
        <div className="cards">
          <div
            className="card"
            style={{
              backgroundImage: `url(${imagen1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: 'white'
            }}
          >
            <button className="btn small">LIGHT NOVELS</button>
          </div>

          <div
            className="card"
            style={{
              backgroundImage: `url(${imagen2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: 'white'
            }}
          >
            <button className="btn small">MANGA</button>
          </div>

          <div
            className="card"
            style={{
              backgroundImage: `url(${imagen3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: 'white'
            }}
          >
            <button className="btn small">SPIN-OFF</button>
          </div>
        </div>
      </section>

      <footer></footer>
    </div>
  );
}

export default App;
