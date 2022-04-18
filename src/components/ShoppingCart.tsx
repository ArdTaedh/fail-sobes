import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import { ShoppingCartItem } from '../models';
import { AddItemForm } from './AddItemForm';
import { ItemsList } from './ItemsList';

const ShoppingCardWrapper = styled(Paper)(() => ({
    width: 600,
    margin: "auto",
    padding: 50,
    minHeight: 500
  }));
  
  const ShoppingCartHeader = styled(Typography)(() => ({
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 24
  }));

export const ShoppingCart = () => {

    const [items, setItems] = useState<ShoppingCartItem[]>([])
    
    return (
        <ShoppingCardWrapper>
            <ShoppingCartHeader>
                Shopping Cart
            </ShoppingCartHeader>
            <AddItemForm 
                addToCart={setItems}
            />
            {
                !!items.length && (
                    <>
                        <ItemsList 
                            items={items}
                            setItems={setItems}
                        />
                        <Total
                            items={items}
                        />
                    </>
                )
            }
        </ShoppingCardWrapper>
    )
}
