import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ProductName} from '../../../components/common/CommonEle.styles';
import { useNavigate } from 'react-router-dom';
import { ProductPrice } from './GridEle.styles'

export default function GridEle(props) {
  const navigate = useNavigate();

  const handleItemInfo = (product) => {
    navigate('/itemInfo', {state: product});
  }

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {props.products.map((value, index) => (
            <Grid onClick={() => handleItemInfo(value)} key={value} item>
              {(value.category === props.category && !props.showExploreMoreBtn ? index < 8 : index < 12) &&
                <Paper
                  sx={{
                    // height: 518,
                    // width: 350

                    height: 418,
                    width: 300
                  }}
                >
                  <img height={318} width={300} src={value.image} alt=""/>
                  <ProductName>{value.name}</ProductName>
                  <ProductPrice>${value.old_price}</ProductPrice>
                </Paper>}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}