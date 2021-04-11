import React from 'react';
import { handleObjFour, handleObjOne, handleObjThree, handleObjTwo} from './Data'
import {InfoSection,Pricing} from '../../components'
const Home = () => {
    return (
        <>
         <InfoSection {...handleObjOne}/>   
         <InfoSection {...handleObjTwo}/>   
         <InfoSection {...handleObjThree}/> 
         <Pricing />  
         <InfoSection {...handleObjFour}/>   
        </>
    )
}

export default Home
