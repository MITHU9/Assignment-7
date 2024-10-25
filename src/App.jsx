import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data/data.json";
import PlayerList from "./components/PlayerList";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  const [coin, setCoin] = useState(0);
  //console.log(data);

  return (
    <div>
      <main className="container relative mx-auto md:pb-20">
        <ToastContainer />
        <Navbar coin={coin} />
        <Hero setCoin={setCoin} />
        <PlayerList data={data} coin={coin} setCoin={setCoin} />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
