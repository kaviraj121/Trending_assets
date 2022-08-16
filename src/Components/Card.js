import React from "react";

import "./Card.css";

export default function Card({ useData }) {
  return (
    <div className="cards">
      <div className="card_body">
        <div className="half-circle">
          <div className="card_image">
            <img className="card_title_image" src={useData.image} alt="" />
          </div>
          <div className="card_title">
            <h6>
              {useData.name} ({useData.symbol.toUpperCase()})
            </h6>
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
          <div className="popular_pair_images grid grid-flow-col auto-cols-max">
            <img
              src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
              alt=""
            />
            <img
              src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850"
              alt=""
            />
            <img
              src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
              alt=""
            />
          </div>
          <div className="popular_pair_heading">
            <h6>Popular Pair</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
