import React from 'react';
import { handleObjThree, handleObjTwo} from './Data'
import {InfoSection} from '../../components'
const Home = () => {
    return (
        <>
         <InfoSection {...handleObjTwo}/>   
         <InfoSection {...handleObjThree}/> 
        </>
    )
}

export default Home
