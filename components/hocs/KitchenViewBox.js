import styled from "@emotion/styled";
import theme from "../../shared/theme";
import OrdersSwipeView from "../OrdersSwipeView";
import ReadyOrdersViewHeading from "../ReadyOrdersViewHeading";
import ReadyOrderSlide from "../ReadyOrderSlide";
import Button from "../Button";
import {Flex} from "rebass";
import React from "react";

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
    Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);

const KitchenViewBoxStyled = styled.div`
  margin-top: 18px;
  margin-bottom: 30px;
`

export default function KitchenViewBox() {
    return (
        <KitchenViewBoxStyled>
            <Flex theme={theme} variant={'kitchenSwiperWrap'} justifyContent='center'>
                <OrdersSwipeView pt={17} pb={10}>
                    <ReadyOrdersViewHeading textAlign='left'>Новые заказы</ReadyOrdersViewHeading>
                    <Swiper
                        slidesPerView='auto'
                        navigation
                        spaceBetween={20}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(el => (
                            <SwiperSlide key={el}>
                                <ReadyOrderSlide>
                                    <Button variant="primary" size="small">12345</Button>
                                </ReadyOrderSlide>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </OrdersSwipeView>
            </Flex>
            <Flex theme={theme} variant={'kitchenSwiperWrap'} justifyContent='center'>
                <OrdersSwipeView pt={17} pb={10}>
                    <ReadyOrdersViewHeading textAlign='left'>Ожидание печи</ReadyOrdersViewHeading>
                    <Swiper
                        slidesPerView='auto'
                        navigation
                        spaceBetween={20}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(el => (
                            <SwiperSlide key={el}>
                                <ReadyOrderSlide>
                                    <Button variant="primary" size="small">12345</Button>
                                </ReadyOrderSlide>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </OrdersSwipeView>
            </Flex>
            <Flex theme={theme} variant={'kitchenSwiperWrap'} justifyContent='center'>
                <OrdersSwipeView pt={17} pb={10}>
                    <ReadyOrdersViewHeading textAlign='left'>В печи</ReadyOrdersViewHeading>
                    <Swiper
                        slidesPerView='auto'
                        navigation
                        spaceBetween={20}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(el => (
                            <SwiperSlide key={el}>
                                <ReadyOrderSlide>
                                    <Button variant="primary" size="small">12345</Button>
                                </ReadyOrderSlide>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </OrdersSwipeView>
            </Flex>
            <Flex theme={theme} variant={'kitchenSwiperWrap'} justifyContent='center'>
                <OrdersSwipeView pt={17} pb={10}>
                    <ReadyOrdersViewHeading textAlign='left'>Готово к выдаче</ReadyOrdersViewHeading>
                    <Swiper
                        slidesPerView='auto'
                        navigation
                        spaceBetween={20}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(el => (
                            <SwiperSlide key={el}>
                                <ReadyOrderSlide>
                                    <Button variant="primary" size="small">12345</Button>
                                </ReadyOrderSlide>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </OrdersSwipeView>
            </Flex>
        </KitchenViewBoxStyled>
    )
}