import styled from "@emotion/styled";
import {
    StatisticsHeading,
    StatisticsInfoPeriod, StatisticsInfoTotal
} from "../StatisticsView";
import theme from "../../shared/theme";
import {Flex} from "rebass";
import {ClockIcon} from "../Icon";
import NextOrderView from "../NextOrderView";
import NextOrderProcess from "../NextOrderProcess";
import NextOrderTimer from "../NextOrderTimer";
import DotsLoader from "../DotsLoader";
import OrdersInQueue from "../OrdersInQueue";
import OrdersQueueLoader from "../OrdersQueueLoader";
import OrdersInQueueValue from "../OrdersInQueueValue";
import {Swiper, SwiperSlide} from 'swiper/react';
import Button from "../Button";
import ReadyOrderSlide from "../ReadyOrderSlide";
import ReadyOrdersView from "../ReadyOrdersView";
import ReadyOrdersViewHeading from "../ReadyOrdersViewHeading";
import React from "react";
import SwiperCore, {
    Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);

const OrdersViewBoxStyled = styled.div`
  padding: 30px 0 35px;
`

const StatisticsIconStyled = styled.div`
  position: absolute;
  top: -11px;
  right: 9px;
`

export default function OrdersViewBox() {
    return (
        <OrdersViewBoxStyled>
            <Flex theme={theme} variant="statisticsBox" flexDirection='column' alignItems='center'>
                <StatisticsIconStyled>
                    <ClockIcon width={25} height={25} fill={theme.colors.green}/>
                </StatisticsIconStyled>
                <StatisticsHeading>Завершенные заказы</StatisticsHeading>
                <Flex theme={theme} variant="statisticsInfo" justifyContent='space-between'>
                    <Flex theme={theme} variant="statisticsInfoColumn" flexDirection="column" alignItems="center">
                        <StatisticsInfoPeriod>Сегодня</StatisticsInfoPeriod>
                        <StatisticsInfoTotal>15 заказов</StatisticsInfoTotal>
                    </Flex>
                    <Flex theme={theme} variant="statisticsInfoColumn" flexDirection="column" alignItems="center">
                        <StatisticsInfoPeriod>За месяц</StatisticsInfoPeriod>
                        <StatisticsInfoTotal>15 заказов</StatisticsInfoTotal>
                    </Flex>
                </Flex>
            </Flex>
            <NextOrderView>
                <NextOrderProcess>Необходима обработка заказа</NextOrderProcess>
                <NextOrderTimer>Время ожидания 2:36</NextOrderTimer>
            </NextOrderView>
            <Flex theme={theme} variant='ordersInQueue' alignItems='center' justifyContent='center'>
                <OrdersQueueLoader>
                    <DotsLoader/>
                </OrdersQueueLoader>
                <OrdersInQueue>В очереди: <OrdersInQueueValue>20</OrdersInQueueValue></OrdersInQueue>
            </Flex>
            <Flex theme={theme} justifyContent='center'>
                <ReadyOrdersView>
                    <ReadyOrdersViewHeading>Заказы готовые к выдаче</ReadyOrdersViewHeading>
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
                </ReadyOrdersView>
            </Flex>
        </OrdersViewBoxStyled>
    )
}