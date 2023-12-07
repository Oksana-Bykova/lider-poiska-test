import "./App.css";
import Header from "../Header/Header";
import Catalog from "../Сatalog/Catalog";

function App() {
    return (
      <div className="root">
        <div className="page">
          <header> 
          <Header></Header>
          </header>
          <main> 
          <Catalog></Catalog> 
          </main>
          <footer>  
          </footer>
        </div>
      </div>
    );
  }
  
  export default App;