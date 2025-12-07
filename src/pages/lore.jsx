import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './lorecss.css';
import imagen1 from '../assets/lore/loretop.webp';

import dragonlore from '../assets/lore/dragolore.png';
import lorew1 from '../assets/lore/lorew1.png';
import lorew3 from '../assets/lore/lorew3.png';
import lorew4 from '../assets/lore/lorew4.png';

import c1 from '../assets/carrusel/1.webp';
import c2 from '../assets/carrusel/2.webp';
import c3 from '../assets/carrusel/3.webp';
import c4 from '../assets/carrusel/4.webp';


function Lore() {

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth <= 768);

  checkMobile(); 
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

  const [index, setIndex] = useState(0);

  const images = [c1, c2, c3, c4]; // 🔹 agrega las imágenes que quieras

  // --- Carrusel de imágenes (lo que ya tenías, sin tocar) ---
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 5000); // cambia cada 5 segundos
  return () => clearInterval(interval);
}, [images.length]);




  return (
    <div className="Lore" style={{backgroundSize: 'cover', backgroundPosition: 'center' }}>

      


      {/* HERO */}
      <section className="herolore" style={{ backgroundImage: `url(${imagen1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          

        

        <div className="herolore-content">
          
          {!isMobile && (
            <div className="y-box"></div>
          )}
          
          {!isMobile && (
            <div className="liightblue-box" style={{transform: "translateX(-8%)", width: "35%"}}></div>)}
          {isMobile && (
            <div className="liightblue-box" style={{width: "100%"}}></div>)}

          {!isMobile && ( 
            <h2 className="blue-titlelore" style={{  top: "-4%"}}>WINNERS!</h2>
          )}
          {isMobile && (
            <h2 className="blue-titlelore" style={{  top: "26%", transform: "rotate(15deg)"}}>WINNERS!</h2>
          )}
          
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
      
      <section className="featureslore1">
        <h1 className='lore-mundo'>NEOGENESIS</h1>

          <div className="lore-row">
            <p className="lore-paragraph" >
              Celestia, the five-hundredth angel of the All-Creator. Like all the other angels, she was required to fulfill the offices and duties of the divine realm. That day, due to the constant overpopulation of souls, she was assigned the shift of creating a new world where those souls could reincarnate. Being a very lazy angel, she copied the work of the All-Creator, and on top of that, she asked one of her countless relatives for help. </p>
            <img src={lorew1} alt="" className="lore-img" />
          </div>

          

          {isMobile && (
            <p className="lore-mundo">
              <div className="lore-row">
            <p className="lore-paragraph" >
            Together with her assistant, she added dragons and other creatures that came to mind, but despite copying the original work of the All-Creator and receiving help, her world looked like a poor second-rate imitation — a task copied carelessly and with spelling mistakes. It still did not meet the minimum standards to be an optimal world for souls to reincarnate in.</p>
          <img src={dragonlore} alt="" className="lore-img" />
          </div>
            </p>
          )}

          {!isMobile && (
              <div className="lore-row">
            <img src={dragonlore} alt="" className="lore-img" />
            <p className="lore-paragraph" >
            Together with her assistant, she added dragons and other creatures that came to mind, but despite copying the original work of the All-Creator and receiving help, her world looked like a poor second-rate imitation — a task copied carelessly and with spelling mistakes. It still did not meet the minimum standards to be an optimal world for souls to reincarnate in.</p>
          </div>
            )}



            <h2 className='lore-mundo'>
              It was then that Celestia, overwhelmed by the parts of the process she found tedious, complex, or simply incomprehensible, decided to create an infinity of divinities in her world so they would take care of the remaining tasks: gods of water, goddesses of earth, and tool-gods that helped her like conscious brushes to give shape to the whole. </h2>



                    <div className="lore-row">
            <p className="lore-paragraph" >
            But not even that abundance of magic and divinity managed to raise her creation to the usual standard, and to fill the blank pages, the grey space, at her assistant’s suggestion, she simply approved adding more demonic and angelic magic. However, in her clumsiness, she spilled an excess of demonic magic while absent-mindedly playing with the flasks that contained that dangerous substance.</p>
          <img src={lorew3} alt="" className="lore-img" />
          </div>



            <h2 className='lore-mundo'>
              Afraid of asking the All-Creator for a new canvas and wanting to hide her mistake, she covered up the excess demonic magic by burying it in the underworld of her world.</h2>

            <h2 className='lore-mundo'>
              When she delivered her work, it did not look entirely acceptable. However, due to time constraints, they were forced to approve it, even though it barely reached the minimum quality thresholds. Detecting the anomaly in the amount of demonic magic, the one in charge of organizing worlds —moved by Celestia’s pleas and tears, for she feared the scolding of the All-Creator— allowed the world to be accepted, even though it did not claim a place among the idyllic worlds. Turning a blind eye to the errors, he granted Celestia a corner in Creation where she could manifest everything imagined on her clumsy canvas, thus giving life to the world and reality.</h2>


            <h2 className='lore-mundo'>
              It is whispered, quietly among the angels, that those who fail to deliver an acceptable world are punished with the labor of judging souls in the underworld of some unknown world. Such is the fate Celestia managed to avoid… for now.</h2>


            <div className="lore-row">
            <img src={lorew4} alt="" className="lore-img" style={{ paddingBottom: "10%" }}/>
            </div>
          
        </section>


    </div>
  );
}





export default Lore;