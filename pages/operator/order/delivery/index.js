import React from "react"
import Head from "next/head"
import Container from "/components/Container";
import Header from "/components/Header";
import Logo from "/components/Logo";
import Footer from "/components/Footer";
import Content from "/components/Content";
import {CardIcon, ChevronRightIcon, PlusIcon, RingBellIcon, SearchIcon} from "/components/Icon";
import Button from "/components/Button";
import theme from "/shared/theme";
import OrderSearchLink from "/components/OrderSearchLink";
import NavBar from "/components/NavBar";
import NavBarLinks from "/components/NavBarLinks";
import Link from "/components/Link";
import NavBarLink from "/components/NavBarLink";
import NavBarButton from "/components/NavBarButton";
import {Box, Flex, Text} from "rebass";
import OrderHeaderField from "../../../../components/OrderHeaderField";
import OrderHeaderValue from "../../../../components/OrderHeaderValue";
import Select, {components} from "react-select";
import {selectStyles} from "../../../../shared/selectStyles";
import Input from "../../../../components/Input";
import OrderHeaderInput from "../../../../components/OrderHeaderInput";
import OrderHeaderPayment from "../../../../components/OrderHeaderPayment";
import PaymentMethod from "../../../../components/PaymentMethod";
import OrderDeliveryTime from "../../../../components/OrderDeliveryTime";
import PaymentStatus from "../../../../components/PaymentStatus";
import OrderHeaderPaymentIcon from "../../../../components/OrderHeaderPaymentIcon";
import OrderTable from "../../../../components/OrderTable";
import OrderTableHeader from "../../../../components/OrderTableHeader";
import OrderTableRow from "../../../../components/OrderTableRow";
import OrderTableCol from "../../../../components/OrderTableCol";
import OrderTableBody from "../../../../components/OrderTableBody";
import OrderTableColIcon from "../../../../components/OrderTableColIcon";
import OrderTableColStatusLink from "../../../../components/OrderTableColStatusLink";
import OrderTableColStatus from "../../../../components/OrderTableColStatus";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
    Scrollbar, Mousewheel
} from 'swiper/core';
import InputNumber from "../../../../components/InputNumber";
import OrderColInputNumberBoxUOM from "../../../../components/OrderColInputNumberBoxUOM";

SwiperCore.use([Scrollbar, Mousewheel]);

export default function Home() {
    const deliveryOptions = [
        {value: '123', label: '???????????????? ???? ??????????????'},
        {value: '1234', label: '??????????????????'},
        {value: '1235', label: 'Delivery Club'}
    ]

    const addressesOptions = [
        {value: '5435', label: '??????????, ????????????????????, 95'},
        {value: '6346', label: '??????????, ??????????????????, 116??3'},
        {value: '12353453455', label: '??????????, ???????????????????????? ??????., 11'}
    ]

    const rows = [
        {
            id: 42342341234,
            num: '1-??25',
            name: '?????? ???????????????????? ??????????, 0,5 ??',
            ea: '70,00 ???/????',
            price: '85,00 ???'
        },
        {
            id: 42342341236,
            num: '1-??27',
            name: '??????????????',
            ea: '300,00 ???/????',
            price: '140,00 ???'
        },
        {
            id: 423423412344123,
            num: '1-??26',
            name: '????????????-??????????, 500??',
            ea: '70,00 ???/????',
            price: '70,00 ???'
        },
        {
            id: 53425324532463245,
            num: '1-??22',
            name: '????????????-??????????, 500??',
            ea: '70,00 ???/????',
            price: '140,00 ???'
        },
        {
            id: 75,
            num: '1-??22',
            name: '????????????-??????????, 500??',
            ea: '70,00 ???/????',
            price: '140,00 ???'
        },
        {
            id: 35234552234,
            num: '1-??22',
            name: '????????????-??????????, 500??',
            ea: '70,00 ???/????',
            price: '140,00 ???'
        },
        {
            id: 523456432543,
            num: '1-??22',
            name: '????????????-??????????, 500??',
            ea: '70,00 ???/????',
            price: '140,00 ???'
        },
        {
            id: 53388999009,
            num: '1-??22',
            name: '????????????-??????????, 500??',
            ea: '70,00 ???/????',
            price: '140,00 ???'
        },
        {
            id: 412371484637634,
            num: '1-??22',
            name: '????????????-??????????, 500??',
            ea: '70,00 ???/????',
            price: '140,00 ???'
        },
        {
            id: 33347123,
            num: '1-??22',
            name: '????????????-??????????, 500??',
            ea: '70,00 ???/????',
            price: '140,00 ???'
        },
        {
            id: 6234735445584563,
            num: '1-??22',
            name: '????????????-??????????, 500??',
            ea: '70,00 ???/????',
            price: '140,00 ???'
        }
    ]

    const deliveryOptionDefault = deliveryOptions[0]
    const addressesOptionDefault = addressesOptions[0]


    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <ChevronRightIcon width={18} height={18} fill={theme.colors.green}/>
            </components.DropdownIndicator>
        );
    };


    return (
        <>
            <Head>
                <title>????????????????|????????????????</title>

                <meta charSet="utf-8"/>
                <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1'/>
                <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="apple-mobile-web-app-title" content="Maclarin"/>
                <meta name="application-name" content="Maclarin"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
                <meta name="theme-color" content="#303030"/>
            </Head>

            <Container>
                <Header>
                    <Logo/>
                    <OrderSearchLink>
                        <Button variant='secondary' icon={<SearchIcon fill={theme.colors.bej}/>}>?????????? ??????????????</Button>
                    </OrderSearchLink>
                </Header>
                <NavBar>
                    <NavBarLinks>
                        <NavBarLink>
                            <Link href={"#"}>????????????????????</Link>
                        </NavBarLink>
                        <NavBarLink>
                            <Link href={"#"}>????????????</Link>
                        </NavBarLink>
                    </NavBarLinks>
                    <NavBarButton>
                        <Button variant="dark" size="xSmall" icon={<PlusIcon/>}>???????????????? ???? ??????????????</Button>
                    </NavBarButton>
                </NavBar>
                <Content>
                    <Flex theme={theme} variant='orderHead' justifyContent='space-between'>
                        <Flex theme={theme} variant='orderHeadColumn' flexDirection='column'>
                            <Flex theme={theme} variant='orderHeadColumnItem' alignItems='center'>
                                <OrderHeaderField>????????????????</OrderHeaderField>
                                <OrderHeaderValue>???????????? ????????</OrderHeaderValue>
                            </Flex>
                            <Flex theme={theme} alignItems='center'>
                                <OrderHeaderField>??????????????</OrderHeaderField>
                                <OrderHeaderValue>+7 904 018 91 91</OrderHeaderValue>
                            </Flex>
                        </Flex>
                        <Flex theme={theme} variant='orderHeadColumn' flexDirection='column'>
                            <Flex theme={theme} variant='orderHeadColumnItem' alignItems='center'>
                                <OrderHeaderField>?????? ????????????????</OrderHeaderField>
                                <OrderHeaderValue>
                                    <Select components={{DropdownIndicator}}
                                            isSearchable={false}
                                            isClearable={false}
                                            styles={selectStyles}
                                            options={deliveryOptions}
                                            defaultValue={deliveryOptionDefault}/>
                                </OrderHeaderValue>
                            </Flex>
                            <Flex theme={theme} alignItems='center'>
                                <OrderHeaderField>?????????? ????????????</OrderHeaderField>
                                <OrderHeaderValue>
                                    <Select components={{DropdownIndicator}}
                                            isSearchable={false}
                                            isClearable={false}
                                            styles={selectStyles}
                                            options={addressesOptions}
                                            defaultValue={addressesOptionDefault}/>
                                </OrderHeaderValue>
                            </Flex>
                        </Flex>
                        <Flex theme={theme} variant='orderHeadColumn' flexDirection='column'>
                            <Flex theme={theme} variant='orderHeadColumnItemMB' alignItems='center'
                                  justifyContent='space-between'>
                                <OrderHeaderPayment>
                                    <OrderHeaderPaymentIcon>
                                        <CardIcon width={15} height={12} fill={theme.colors.green}/>
                                    </OrderHeaderPaymentIcon>
                                    <PaymentMethod>????????????????</PaymentMethod>/<PaymentStatus>????????????????</PaymentStatus>
                                </OrderHeaderPayment>
                                <OrderDeliveryTime>?????????????????? 17.06.2021, 14:00</OrderDeliveryTime>
                            </Flex>
                            <Flex theme={theme} alignItems='center'>
                                <OrderHeaderField css={{marginRight: 19}}>?????????? ????????????????</OrderHeaderField>
                                <OrderHeaderValue>
                                    <OrderHeaderInput>
                                        <Input variant='default' size='small'
                                               value="??????????, ???????????? 47, ???? 56, 4 ????????"/>
                                    </OrderHeaderInput>
                                </OrderHeaderValue>
                            </Flex>
                        </Flex>
                    </Flex>
                    <OrderTable>
                        <OrderTableHeader>
                            <OrderTableRow>
                                <OrderTableCol fb={'17.7%'} fg={1}>
                                    <Text fontWeight='bold' fontSize={[theme.fontSizes.p22]}>?????????? ???1</Text>
                                </OrderTableCol>
                                <OrderTableCol fb={'43%'} fg={1} textAllign={"left"}>
                                    <Box theme={theme} as={'span'} variant='colText'>???? 11.06.2021, <Box theme={theme}
                                                                                                         as={'span'}
                                                                                                         variant='colTextOrange'>11:50</Box></Box>
                                </OrderTableCol>
                                <OrderTableCol fb={'33.4%'} fg={1} textAlign={"center"}>
                                    <Text fontSize={[theme.fontSizes.p12]}>??????-????</Text>
                                </OrderTableCol>
                                <OrderTableCol fb={'18%'} fg={1} textAlign="right">
                                    <Text fontSize={[theme.fontSizes.p12]}>????????????:</Text>
                                </OrderTableCol>
                                <OrderTableCol fb={'20%'} fg={1} textAlign="right">
                                    <OrderTableColStatus>
                                        <OrderTableColIcon>
                                            <RingBellIcon width={15} height={15} fill={theme.colors.orange}/>
                                        </OrderTableColIcon>
                                        <OrderTableColStatusLink>
                                            <Link href="#" color={theme.colors.orange}>?????????? ??????????</Link>
                                        </OrderTableColStatusLink>
                                    </OrderTableColStatus>
                                </OrderTableCol>
                            </OrderTableRow>
                        </OrderTableHeader>
                        <OrderTableBody>
                            <Swiper direction={'vertical'} slidesPerView={'auto'} freeMode={true} scrollbar={true}
                                    mousewheel={true} className="orderLines">
                                <SwiperSlide>
                                    {rows.map(row => (
                                        <OrderTableRow key={row.id} minHeight={37} alignItems='center'>
                                            <OrderTableCol fb={'17.7%'} fg={1}>
                                                <Text color='black' fontSize={[theme.fontSizes.p14]}>
                                                    {row.num}
                                                </Text>
                                            </OrderTableCol>
                                            <OrderTableCol fb={'43%'} fg={1}>
                                                <Text color='green' fontSize={[theme.fontSizes.p14]}>
                                                    {row.name}
                                                </Text>
                                            </OrderTableCol>
                                            <OrderTableCol fb={'33.4%'} fg={1}>
                                                <Flex alignItems='center' justifyContent='flex-end'
                                                      flexDirection='column'>
                                                    <Box>
                                                        <InputNumber value={1}/>
                                                    </Box>
                                                    <OrderColInputNumberBoxUOM>
                                                        ??????????
                                                    </OrderColInputNumberBoxUOM>
                                                </Flex>
                                            </OrderTableCol>
                                            <OrderTableCol fb={'18%'} fg={1} textAlign="right">
                                                <Text color='black' textAllign={'center'}
                                                      fontSize={[theme.fontSizes.p14]}>
                                                    {row.ea}
                                                </Text>
                                            </OrderTableCol>
                                            <OrderTableCol fb={'20%'} fg={1} textAlign="right">
                                                <Text color='black' fontWeight='bold'
                                                      fontSize={[theme.fontSizes.p18]}>{row.price}</Text>
                                            </OrderTableCol>
                                        </OrderTableRow>
                                    ))}
                                </SwiperSlide></Swiper>
                        </OrderTableBody>
                    </OrderTable>
                    <Flex theme={theme} variant='totalPrice' alignItems='flex-end' justifyContent='flex-end'>
                        <Text color='green' fontSize={theme.fontSizes.p18}>?????????? 155 840,00 ???</Text>
                    </Flex>
                    <Flex theme={theme} variant='orderAF' alignItems='flex-end' justifyContent='space-between'>
                        <Flex theme={theme} variant='cardInputComment' flexDirection='column'>
                            <Input
                                type="text"
                                name="comment"
                                placeholder='?????????????? ??????????????????????'
                                label='??????????????????????'
                                withLabel
                            />
                        </Flex>
                        <Flex theme={theme} variant='cardInputServiceComment' flexDirection='column'>
                            <Input
                                type="text"
                                name="serviceComment"
                                placeholder='?????????????? ??????????????????????'
                                label='?????????????????? ??????????????????????'
                                withLabel
                            />
                        </Flex>
                        <Flex theme={theme} variant='cardInputPromoCode' flexDirection='column'>
                            <Input
                                type="text"
                                name="promoCode"
                                placeholder='?????????????? ????????????????'
                                label='????????????????'
                                withLabel
                                withStatusIcon
                            />
                        </Flex>
                        <Box theme={theme} variant='button216'>
                            <Button variant='primary' size='xLarge'>?????????? ?? ????????????</Button>
                        </Box>
                    </Flex>
                </Content>
                <Footer/>
            </Container>
        </>
    )
}