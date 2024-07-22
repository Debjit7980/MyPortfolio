import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import Loading from '../components/Loading';
import CustomCursor from '../components/CustomCursor';

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 3500);

        return () => clearTimeout(delay); // Clean up timeout on component unmount
    }, []);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <CustomCursor />
            <section id="Home"><Header /></section>
            <section><Hero /></section>
            <section id="Skills"><Skills/></section>
            <section id="Projects"><Services /></section>
            <section id="Timeline"><Timeline /></section>
            <section id="Contact"><Contact/></section>
        </>
    );
}

export default Home;


// if (isLoading) {
    //     return (
    //         <>
    //             <Loading/>
    //         </>
    //     )
    // }
    //<div className="w-full h-screen bg-gradient-to-b from-[#111132] to-[#0c0c1d] ">LOADING...</div>;
