import styled from '@emotion/styled';
import { Box, Button, FormControl, MenuItem, TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react'
import { ALL_PRODUCTS, ShoppingCartItem } from '../models';

const AddItemBox = styled(Box)(() => ({
    display: "flex",
    flex: 1,
    marginTop: "25px"
}));

const ItemSelectWrapper = styled(FormControl)(() => ({
    width: "200px",
    marginRight: "20px"
}));

const QuantityInputWrapper = styled(FormControl)(() => ({
    width: "80px",
    marginRight: "45px"
}));

type AddItemProps = {
    addToCart: (value: ShoppingCartItem[]) => void
    items: ShoppingCartItem[]
}

export const AddItemForm = ({ addToCart, items }: AddItemProps) => {
    const [productId, setProductId] = useState<string | "">("");
    const [quantity, setQuantity] = useState<number>(0);

    const setProductChangeSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setProductId(e.target.value);
    };

    const setProductQuantityHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(+e.target.value);
    };

    const setAddToCartHandler = (product: string, q: number) => {
        //@ts-ignore
        addToCart(prev =>
            //@ts-ignore
            prev.find(item => item.productId === product)
                //@ts-ignore
                ? prev.map(item => ({
                    ...item,
                    quantity: item.productId === product ? item.quantity + 1 : item.quantity,
                }))
                : [...prev, { productId: product , quantity: q }]
        );
      }

    return (
        <AddItemBox>
            <ItemSelectWrapper>
                <TextField
                    select
                    value={productId}
                    onChange={setProductChangeSelectHandler}
                >
                    {
                        ALL_PRODUCTS.map(product => (
                            <MenuItem
                                key={product.id}
                                value={product.id}
                            >
                                {product.label}
                            </MenuItem>
                        ))
                    }
                </TextField>
            </ItemSelectWrapper>
            <QuantityInputWrapper>
                <TextField
                    label="Quantity"
                    type="number"
                    sx={{
                        width: '7rem'
                    }}
                    InputProps={{
                        inputProps: {
                            min: 0
                        }
                    }}
                    value={quantity}
                    onChange={setProductQuantityHandler}
                >

                </TextField>
            </QuantityInputWrapper>
            <Button
                variant="contained"
            disabled={!quantity || !productId}
            onClick={() => setAddToCartHandler(productId, quantity)}
            >
                Add
            </Button>
        </AddItemBox>
    )
}
