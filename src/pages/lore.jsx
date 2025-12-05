import { Link } from 'react-router-dom';
import '../App.css';
/* npm run deploy

git status
git add .
git commit -m "situación actual"
git push -u origin master
cls
*/
function lore() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Bienvenido al Menú</h1>
      <p>Esta es la página /home/menu</p>
      <Link className='link'to ="/MyMagicOdyssey/lore">Home</Link>
    </div>
  );
}

export default lore;