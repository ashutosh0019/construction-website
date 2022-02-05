import React from 'react';
import Activity from "./components/activity/Activity";
import { ActivityData } from './components/activity/ActivityData';
import WorkingStyle from './components/working-style/WorkingStyle';
const Home = () => {
    return (
       <>
            <WorkingStyle/>
            <Activity slides={ActivityData}/>

       </>
        
    );
};

export default Home;
