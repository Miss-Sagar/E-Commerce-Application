import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import CrossIconImg from '../../components/images/cart_cross_icon.png';
import axios from 'axios';
import { setCartProductItems } from '../../redux/actions/CartProductAction';

function MuiDataTable(props) {

  const [cartProducts, setCartProducts] = useState([]);
  const accessToken = props.userAccessToken;

  const fetchCartProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/getCartProducts",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
        );
      // setCartProducts(response.data);
      props.setCartProductItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const handleRemoveItem = async (id) => {
    console.log("id", id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/removeCartItem/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
        );
      if(response.status === 200){
        fetchCartProducts();
      }
      // Handle the response if needed
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }
  



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Products</b></TableCell>
            <TableCell align="center"><b>Price(Rs)</b></TableCell>
            <TableCell align="center"><b>Quantity</b></TableCell>
            <TableCell align="center"><b>Total Price</b></TableCell>
            <TableCell align="center"><b>Remove</b></TableCell>
          </TableRow>
        </TableHead>
        {/* {props.totalCartProducts.length > 0 ?  */}
        {props.totalCartProducts.length > 0 ?
          <TableBody>
            {/* {props.totalCartProducts.map((row) => ( */}
            {props.totalCartProducts.map((row) => (
              // console.log("row is:", row.);
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img height='40px' width='60px' src={row.image} alt="" />
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.price * row.quantity}</TableCell>
                <TableCell  align="center">
                  <img style={{cursor: 'pointer'}} onClick={() => handleRemoveItem(row._id)} src={CrossIconImg} alt="" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          : <div style={{padding: "20px"}}> No Carted Product</div>}
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => ({
  totalCartProducts: state.CartItemInfo.totalCartProducts,
  userAccessToken: state.AuthenticationInfo.userAccessToken
})

const mapDispatchToProps = (dispatch) => ({
  setCartProductItems: (items) => dispatch(setCartProductItems(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(MuiDataTable)