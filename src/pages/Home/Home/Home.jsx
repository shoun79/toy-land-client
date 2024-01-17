import React from 'react';
import Hero from '../Hero/Hero';
import SliderHome from '../SliderHome/SliderHome';
import Offer from '../Offer/Offer';
import Sponsors from '../Sponsors/Sponsors';
import CategoriesTabs from '../../CategoriesTabs/CategoriesTabs';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>
            <SliderHome></SliderHome>
            <CategoriesTabs></CategoriesTabs>
            <Offer></Offer>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;