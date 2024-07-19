import React from "react";
import { ReactComponent as HeartIcon } from "../../../imgs/icon/icon_heart.svg";
import { Link } from "react-router-dom";
import notImage from "../../../imgs/png/images.png";

function ItemCard({ item, size = "default" }) {
  // Define style based on the size prop
  const cardStyles = {
    default: "p-3 w-[221px] rounded-xl hover:shadow-lg m-auto",
    best: "p-3 w-[300px] h-[393px] rounded-xl hover:shadow-lg m-auto",
  };

  const imageStyles = {
    default: "rounded-xl w-[221px] h-[221px] object-cover",
    best: "rounded-xl w-[300px] h-[300px] object-cover",
  };

  return (
    <Link to={`/items/${item.id}`} className={cardStyles[size]}>
      <img
        className={imageStyles[size]}
        src={item.images[0] ? item.images[0] : notImage}
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
  );
}

export default ItemCard;
