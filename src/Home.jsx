import React from 'react';
import Activity from "./components/activity/Activity";
import { ActivityData } from './components/activity/ActivityData';
const Home = () => {
    return (
       
            <Activity slides={ActivityData}/>
        
    );
};

export default Home;
