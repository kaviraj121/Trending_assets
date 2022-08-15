import React from "react";

import "./Card.css";

export default function Card({ useData }) {
  return (
    <div className="cards">
      <div className="card_image">
        <img className="card_title_image" src={useData.image} alt="" />
      </div>
      <div className="card_body">
        <div className="card_title">
          {useData.name} ({useData.symbol.toUpperCase()})
        </div>
        <div className="card_price">
          ${useData.current_price.toLocaleString()}{" "}
          {useData.price_change_percentage_24h < 0 ? (
            <span className="red">
              {useData.price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="green">
              {useData.price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
        </div>
        <div className="card_price_heading">
          <h6>Price</h6>
        </div>
        <div className="card_tvl">$60,000</div>
        <div className="card_tvl_heading">
          <h6>TVL</h6>
        </div>
        <div className="popular_pair_images">
          <img
            src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
            alt=""
          />
          <img
            src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
            alt=""
          />
          <img
            src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
            alt=""
          />
        </div>
        <div className="popular_pair_heading">
          <h6>Popular Pair</h6>
        </div>
      </div>
    </div>
  );
}
