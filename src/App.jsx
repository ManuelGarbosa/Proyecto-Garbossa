import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import DetailContainer from "./Components/DetailContainer/DetailContainer";
import Cart from "./Components/Cart/Cart";
import Chekout from "./Components/Chekout/Chekout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<DetailContainer />} />
            <Route path="/item/:idItem" element={<DetailContainer/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/chekout" element={<Chekout />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
