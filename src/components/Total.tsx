import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import { PRODUCTS_MAP, ShoppingCartItem } from "../models";

const TotalWrapper = styled(Box)(() => ({
  paddingTop: 40
}));

type TotalProps = {
  items: ShoppingCartItem[];
  clearItems: (value: ShoppingCartItem[]) => void
};

const Total: React.FC<TotalProps> = ({ items, clearItems }) => {
  const products = items.map((item) => {
    return item.quantity * PRODUCTS_MAP[item.productId].price;
  })

  const clearItemsHandler = () => {
    clearItems([])
  }

  return (
    <TotalWrapper>
      <Grid container>
        <Grid item xs={6}>
         
          <Typography>{`Total: ${products.reduce((a,b) => a + b)}`}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" onClick={clearItemsHandler}>Clear</Button>
        </Grid>
      </Grid>
    </TotalWrapper>
  );
};

export default Total;
