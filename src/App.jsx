import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer nombre="Ezequiel"/>
    </>
  );
}

export default App;
