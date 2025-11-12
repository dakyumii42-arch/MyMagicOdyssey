import './App.css';
import imagen1 from './assets/lv1.jpg';
import imagen2 from './assets/lv2.jpg';
import imagen3 from './assets/lv3.jpg';

function App() {
  return (
    <div className="App">

      <header className="navbar">
        <div className="logo">MY MAGIC ODYSSEY</div>
        <nav>
          
          <button className="btn small">notify me!</button>
        </nav>
      </header>

      <section className="hero">
        
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

      <footer>
        
      </footer>
    </div>
  );
}

export default App;