import React from "react";
import { Link } from "react-router-dom";

const Coin = ({
  id,
  name,
  image,
  current_price,
  price_change_percentage_24h,
  market_cap,
  market_cap_rank,
}) => {
  const priceChange =
    Math.round((price_change_percentage_24h + Number.EPSILON) * 100) / 100;
  return (
    <div className="coin">
      <Link
        to={`/coins/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="container">
          <div className="title">
            <h1>{name}</h1>
            <img src={image} alt="" />
          </div>
          <div className="data">
            <p className="price">Rp.{current_price}</p>
            <div className="percentage">
              {priceChange > 0 ? (
                <p className="coin-green">+{priceChange}%</p>
              ) : (
                <p className="coin-red">{priceChange}%</p>
              )}
            </div>
            
            <p className="marketcap">{market_cap}</p>
            <div className="rank">{market_cap_rank}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Coin;