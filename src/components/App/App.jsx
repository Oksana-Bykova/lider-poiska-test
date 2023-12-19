import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "../../redux";

import Header from "../Header/Header";
import Catalog from "../Сatalog/Catalog";
import Basket from "../Basket/Basket";
import { Popup } from "../Popup/Popup";

function App() {
  return (
    <Provider store={store}>
      <div className="root">
        <div className="page">
          <header>
            <Header></Header>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Catalog></Catalog>} />
              <Route path="/basket" element={<Basket></Basket>} />
            </Routes>
            <Popup />
          </main>
        </div>
      </div>
    </Provider>
  );
}

export default App;
