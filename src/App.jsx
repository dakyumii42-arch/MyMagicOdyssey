import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Lore from "./pages/lore";
/* npm run deploy

git status
git add .
git commit -m "situación actual"
git push -u origin master
cls
*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lore" element={<Lore />} />
    </Routes>
  );
}

export default App;
