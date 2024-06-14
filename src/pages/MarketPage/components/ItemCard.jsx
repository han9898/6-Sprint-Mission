import React from "react";
import { ReactComponent as HeartIcon } from "../../../imgs/icon/icon_heart.svg";
import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <div>
      <Link to={`/items/${item.id}`}>
        <img
          className="rounded-xl w-[282px] h-[282px]"
          src={item.images[0]}
          alt={item.name}
        />
        <div>
          <h2 className="text-[14px] font-[500]">{item.name}</h2>
          <p className="text-[16px] font-[700]">
            {item.price.toLocaleString()}원
          </p>
          <div className="flex items-center gap-[4px] text-[12px] font-[500]">
            <HeartIcon />
            {item.favoriteCount}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
