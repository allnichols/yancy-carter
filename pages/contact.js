import React from 'react';
import Main from '../components/Container';
import Footer from '../components/footer';
import HomeForm from '../components/HomeForm';
import Nav from '../components/Nav';
import Head from 'next/head';
export default function contact(){
    
    return(
        <>
        <Head>
            <title>Yancy Carter - Contact</title>
            <link rel="stylesheet" href="https://use.typekit.net/pou0knh.css"></link>
        </Head>
        <Main>
            <Nav />
            <HomeForm />
        </Main>
        <Footer />
        </>
    )
}