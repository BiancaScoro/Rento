import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/home";
import Buy from "./pages/buy";
import Commercial from "./pages/commercial";
import Rent from "./pages/rent";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/buy" element={<Buy />}/>
      <Route path="/commercial" element={<Commercial />}/>
      <Route path="/rent" element={<Rent />}/>
    </Routes>
    </>
  );
}

export default App;
