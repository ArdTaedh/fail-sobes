import styled from '@emotion/styled';
import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import React from 'react'
import { PRODUCTS_MAP, ShoppingCartItem } from '../models';

const ItemsListWrapper = styled(Box)(() => ({
    paddingTop: 20
}));


type ItemsListProps = {
    items: ShoppingCartItem[]
    setItems: (value: ShoppingCartItem[]) => void
}

export const ItemsList = ({ items, setItems }: ItemsListProps) => {
    return (
        <ItemsListWrapper>
            {
                items.map(item => {
                    const product = PRODUCTS_MAP[item.productId];
                    const price = product?.price || 0;           

                    console.log(items)

                    const plusQuantityHandler = (id: string) => {
                        const index = items.findIndex(item => item.productId === id)

                        if (index === -1) 
                            return 

                        const item = items[index]

                        const updatedItem = {
                            ...item,
                            quantity: item.quantity++
                        }

                        const updatedArray = [...items]

                        setItems(updatedArray)
                    }


                    const minusQuantityHandler = (id: string) => {
                        const index = items.findIndex(item => item.productId === id)

                        if (index === -1) 
                            return 

                        const item = items[index]

                        console.log(id)

                        if (item.productId === id && item.quantity === 1) {
                            setItems(items.filter(item => item.productId !== id))
                        } else {
                            const updatedItem = {
                                ...item,
                                quantity: item.quantity--
                            }
                        }

                        const updatedArray = [...items]

                        setItems(updatedArray)
                    }

                    return (
                        <Grid
                            key={item.productId}
                            container
                        >
                            <Grid
                                item
                                xs={12}
                            >
                                <Typography
                                >
                                    {product?.label}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <Typography>
                                    {`${item.quantity} x $${price} = $${item.quantity * price}`}
                                </Typography>
                            </Grid>
                            <ButtonGroup
                                variant="outlined"
                                aria-label="outlined button group"
                            >
                                <Button
                                    // onClick={() => setPlusQuantityHandler(item.productId)}
                                    onClick={() => plusQuantityHandler(item.productId)}
                                >
                                    +
                                </Button>
                                <Button
                                    onClick={() => minusQuantityHandler(item.productId)}
                                >
                                    -
                                </Button>
                                <Button>x</Button>
                            </ButtonGroup>
                        </Grid>
                    )
                })
            }
        </ItemsListWrapper>
    )
}
