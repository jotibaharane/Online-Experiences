import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import data from "./components/data";
import "./app.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <section className="cards-list">
      {
        data.map(
          item=>{
            return <Cards key={item.id} item={item}/>
          }
        )
      }
      </section>
    </div>
  );
}

export default App;
