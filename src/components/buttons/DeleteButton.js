// Styling
import { DeleteButtonStyled } from "../../styles";

import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/action/productActions";

//Actions



const DeleteButton = ({ productId }) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteProduct(productId))}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
