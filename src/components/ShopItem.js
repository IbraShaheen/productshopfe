// import { LibraryItem } from "../../styles";
import { Link } from "react-router-dom";

const ShopItem = (props) => {
  const shop = props.shop;
  return (
    <center>
        <Link to={`/shops/${shop.slug}`}>
      <h3>{shop.name}</h3>
      </Link>
        <img src={shop.image} style={{width:"300px",height:"300px"}} />
      
    </center>
  );
};
export default ShopItem;