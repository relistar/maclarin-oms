import React from "react"
import Head from "next/head"
import Container from "/components/Container";
import Header from "/components/Header";
import Logo from "/components/Logo";
import Footer from "/components/Footer";
import Content from "/components/Content";
import {PlusIcon, SearchIcon} from "/components/Icon";
import Button from "/components/Button";
import theme from "/shared/theme";
import OrderSearchLink from "/components/OrderSearchLink";
import NavBar from "/components/NavBar";
import NavBarLinks from "/components/NavBarLinks";
import Link from "/components/Link";
import NavBarLink from "/components/NavBarLink";
import NavBarButton from "../../components/NavBarButton";
import OrdersViewBox from "../../components/hocs/OrdersViewBox";

export default function Home() {
    return (
        <>
            <Head>
                <title>Главный экран оператора</title>

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
                        <Button variant='secondary' icon={<SearchIcon fill={theme.colors.bej}/>}>Поиск заказов</Button>
                    </OrderSearchLink>
                </Header>
                <NavBar>
                    <NavBarLinks>
                        <NavBarLink>
                            <Link href={"#"}>Инструкция</Link>
                        </NavBarLink>
                        <NavBarLink>
                            <Link href={"#"}>Скрипт</Link>
                        </NavBarLink>
                    </NavBarLinks>
                    <NavBarButton>
                        <Button variant="dark" size="xSmall" icon={<PlusIcon/>}>Оформить за клиента</Button>
                    </NavBarButton>
                </NavBar>
                <Content>
                    <OrdersViewBox/>
                </Content>
                <Footer/>
            </Container>
        </>
    )
}