import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import DetailContainer from "./Components/DetailContainer/DetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
          <Route path="/item/:idItem" element={<DetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
