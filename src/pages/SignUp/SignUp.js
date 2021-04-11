import React from 'react';
import {handleObjOne} from './Data'
import {InfoSection} from '../../components'
const Home = () => {
    return (
        <>
         <InfoSection {...handleObjOne}/>  
        </>
    )
}

export default Home
