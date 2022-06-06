import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';


import Inventorys from '../Inventorys/Inventorys';
import LatestProduct from '../LatestProduct/LatestProduct';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventorys></Inventorys>
            <LatestProduct></LatestProduct>
            <Upcoming></Upcoming>

        </div>
    );
};

export default Home;