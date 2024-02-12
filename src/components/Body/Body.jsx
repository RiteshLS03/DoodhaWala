import { dairy_products } from "../../utils/config";
import Card from "../Card/Card";

const Body = () => {
  const items = dairy_products.map((item) => item.product_name);
  console.log(items);
  return (
    <div className="p-4 mx-4">
      <div className="flex flex-wrap  justify-around">
        {dairy_products.map((item, i) => {
          return <Card item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Body;
