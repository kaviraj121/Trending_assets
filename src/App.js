import "./App.css";
import Card from "./Components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="App">
      {coins.map((coin) => {
        return <Card useData={coin} />;
      })}
    </div>
  );
}

export default App;
