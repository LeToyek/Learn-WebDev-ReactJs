import React from "react";

const Coin = ({
  name,
  image,
  current_price,
  price_change_percentage_24h,
  market_cap,
  market_cap_rank
}) => {
  const priceChange = Math.round((price_change_percentage_24h + Number.EPSILON) * 100) / 100;
  return (
    <div className="coin">
      <div className="container">
        <div className="title">
          <h1>{name}</h1>
          <img src={image} alt="" />
        </div>
        <div className="data">
          <p className="price">Rs.{current_price}</p>
          {price_change_percentage_24h > 0 ? (
            <p className="coin-green">
              +{priceChange}%
            </p>
          ) : (
            <p className="coin-red">
              {priceChange}%
            </p>
          )}
          <p className="marketcap">
            {market_cap}
          </p>
          {market_cap_rank}
        </div>
      </div>
    </div>
  );
};

export default Coin;
