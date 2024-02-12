import { useContext } from "react";
import milk from "../../assets/milk.jpeg";
import { FaRupeeSign } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import userContext from "../../utils/userContext";

const Card = ({ item }) => {
  const data = useContext(userContext);
  console.log(data);
  const handleAddToCart = function (item) {
    data.setCartItem(item);
  };
  return (
    <div className="border-2 p-4 m-4 rounded-xl" key={item.id}>
      <div>
        <img width={250} src={milk}></img>
      </div>
      <div className="flex justify-between ">
        <h1 className="text-xl">{item.product_name}</h1>
        <h1 className="flex text-lg items-center">
          <FaRupeeSign />
          {item.price_inr} / {item.quantity}
        </h1>
      </div>
      <h1 className="text-lg flex items-center">
        Calories:{item.calories}
        {<FaFire />}
      </h1>
      <h1 className="text-lg flex items-center">
        <MdStarRate /> {item.quality}
      </h1>
      <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
    </div>
  );
};

export default Card;
