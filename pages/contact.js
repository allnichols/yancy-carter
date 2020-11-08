import React from 'react';
import Main from '../components/Container';
import Footer from '../components/footer';
import HomeForm from '../components/HomeForm';
import Nav from '../components/Nav';

export default function contact(){
    
    return(
        <>
        <Main>
            <Nav />
            <HomeForm />
        </Main>
        <Footer />
        </>
    )
}