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

                    const plusQuantityHandler = (id: string) => {
                        //@ts-ignore
                        setItems(prev =>
                            //@ts-ignore
                            prev.find(item => item.productId === id)
                                //@ts-ignore
                                ? prev.map(item => ({
                                    ...item,
                                    quantity: item.productId === id ? item.quantity + 1 : item.quantity,
                                }))
                                : [...prev]
                        );
                    }

                    const minusQuantityHandler = (id: string) => {
                        //@ts-ignore
                        setItems(prev =>
                              //@ts-ignore
                            prev.find(item => item.productId === id)?.quantity === 1
                              //@ts-ignore
                                ? prev.filter(item => item.productId !== id)
                                  //@ts-ignore
                                : prev.map(item => ({
                                        ...item,
                                        quantity: item.productId === id ? item.quantity - 1 : item.quantity,
                                  })),
                        );
                    }

                    const removeItemHandler = (id: string) => {
                        //@ts-ignore
                        setItems(prev =>
                            //@ts-ignore
                            prev.filter(item => item.productId !== id)
                        );
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
                                    onClick={() => plusQuantityHandler(item.productId)}
                                >
                                    +
                                </Button>
                                <Button
                                    onClick={() => minusQuantityHandler(item.productId)}
                                >
                                    -
                                </Button>
                                <Button
                                    onClick={() => removeItemHandler(item.productId)}
                                >
                                    x
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    )
                })
            }
        </ItemsListWrapper>
    )
}
