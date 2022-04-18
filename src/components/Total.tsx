import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import { PRODUCTS_MAP, ShoppingCartItem } from "../models";

const TotalWrapper = styled(Box)(() => ({
  paddingTop: 40
}));

type TotalProps = {
  items: ShoppingCartItem[];
};

const Total: React.FC<TotalProps> = ({ items }) => {
  console.log(items)

  const products = items.map((item) => {
    return PRODUCTS_MAP[item.productId].id;
  })
 
  const existingItem = items.find(item => item.productId === products.find((product) => product))
  console.log(existingItem)


  return (
    <TotalWrapper>
      <Grid container>
        <Grid item xs={6}>
         
          <Typography>{`Total: ${}`}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined">Clear</Button>
        </Grid>
      </Grid>
    </TotalWrapper>
  );
};

export default Total;
