import { Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import Lore from "./pages/lore";


function App() {
  return (
    <Routes>
      <Route path="/MyMagicOdyssey" element={<HomePage />} />
      <Route path="/MyMagicOdyssey/lore" element={<Lore />} />
    </Routes>
  );
}

export default App;