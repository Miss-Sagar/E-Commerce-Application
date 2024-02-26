import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCartProductValue, setCartProductItems} from '../../redux/actions/CartProductAction';
import { SelectSizeContainer, Heading, SelecteBtnContainer, AddToCartBtn, SelectBtn } from './SelectSize.styles';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const SelectSize = (props) => {
  console.log("props", props);
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');

  const { id, category, new_price } = props.location.state;

  useEffect(() => {
  }, [props.totalCartProducts])

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCartClick = async () => {
    // if (props.userAuthentication) {
      try {
        const accessToken = props.userAccessToken;

        const response = await axios.post(
          `http://localhost:5000/cartData/${id}`,
          { itemId: id, category, price: new_price },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );
        if (response.status === 201) {
          alert("Item added to cart successfully");

          // Navigation after successful addition to cart
          // navigate('/CartData');

          const isItemAlreadyInCart = props.totalCartProducts.some(item => item.id === props.location.state.id);
          if (!isItemAlreadyInCart) {
            // Modify the line below if setCartProductValue requires a parameter
            props.setCartProductValue(/* pass the required parameter */);
            props.setCartProductItems(props.location.state);
            // Modify the line below if setMultipleCartProductInfo requires a parameter
            // props.setMultipleCartProductInfo(/* pass the required parameter */);
          } else {
            // Modify the line below if setMultipleCartProductInfo requires a parameter
            // props.setMultipleCartProductInfo(/* pass the required parameter */);
          }
        }
      } catch (err) {
        console.error("Something went wrong", err);
      }

      navigate('/cartData');
    // } else {
    //   alert("Please Register or Login to cart the product successfully");
    // }
  };


  return (
    <SelectSizeContainer>
      <Heading>Select Size</Heading>
      <SelecteBtnContainer>
        {sizes.map((size) => (
          <SelectBtn
            key={size}
            variant={selectedSize === size ? 'contained' : 'outlined'}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </SelectBtn>
        ))}
      </SelecteBtnContainer>
      <AddToCartBtn onClick={handleAddToCartClick}>Add To Cart</AddToCartBtn>
    </SelectSizeContainer>
  );
};

const mapStateToProps = (state) => ({
  // totalCartProductsValue: state.CartItemInfo.totalCartProductsValue,
  totalCartProducts: state.CartItemInfo.totalCartProducts,
  userAuthentication: state.AuthenticationInfo.userAuthentication,
  userAccessToken: state.AuthenticationInfo.userAccessToken
});

const mapDispatchToProps = (dispatch) => ({
  setCartProductValue: (value) => dispatch(setCartProductValue(value)),
  setCartProductItems: (item) => dispatch(setCartProductItems(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectSize);