import React from `react`;
import ReactDOM from `react-dom`;
import `./App.css`;
import Header from `./components/Header`;
import Layout from `./components/Layout`;
import Footer from `./components/Footer`;
import Image from` ./components/Layout/bg1.jpg`



function  App() {
    return (
        <Header
            title
            discription
            />

        <Layout
            title
            discription
            urlBg = {Image}
            />

        <Layout
            title
            discription
            />

        <Layout
            title
            discription
            urlBg = {Image}
            />

    <Footer
        />

    )
}

// @ts-ignore

import s from `./style.modul.css`;
import  ReactLogo from `../../assets/ReactLogo.png`;
import  {ReactComponent as ReactLogo} from "*.svg";
import React from "react";

const ConstHeaderBlock = (props) => {
    let consol;
    consol.log(`####:props`, props`)
    return (
        <div className={s.root}>
            <р className={s.container}>
                <img scr={ReactLogo} alt="ReactLogo"/>
                <h1 className={s.header}>This is Pokemon Card
                    <p className={s.paragraph}> Simple Triple Triad Card Game </h1>
                Game
            </р>
            )
        }


export default HeaderBlock;)
};