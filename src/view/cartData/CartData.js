import React, {useEffect} from 'react';
import { MainContainer, PromoCodeCont, SubmitBtn } from './CartData.styles';
import MuiDataTable from './MuiDataTable';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';

function CartData(props) {

  // const subTotalPrice = props.totalCartProducts.reduce(
  //   (total, row) => total + row.price * row.quantity,
  //   0
  // );
  const shippingFee = 20;

  return (
    <MainContainer>
      <MuiDataTable />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container >
            <Grid item xs={6}>
            <h2>Cart Totals</h2>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>SubTotal</TableCell>
                      <TableCell style={{textAlign: 'right'}}>${0}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Shipping Fee</TableCell>
                      <TableCell style={{textAlign: 'right'}}>${shippingFee}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><b>Total</b></TableCell>
                      <TableCell style={{textAlign: 'right'}}><b>${0 + shippingFee}</b></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid style={{padding: '5%' }} item xs={6}>
              <div>If you have a promo code enter it here</div>
              <PromoCodeCont>
                <TextField fullWidth placeholder='Promo Code'></TextField>
                <SubmitBtn>Submit</SubmitBtn>
              </PromoCodeCont>
            </Grid>
          </Grid>
        </Box>
      </div>
    </MainContainer>
  )
}

const mapStateToProps = (state) => ({
  totalCartProducts : state.CartItemInfo.totalCartProducts
})

export default connect(mapStateToProps, null)(CartData);