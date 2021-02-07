// rafce
import React, {useState} from 'react';
import HeroSection from '../Components/HeroSection/index';
import NavBar from '../Components/NavBar/index';
import Sidebar from '../Components/Sidebar/index';
import InfoSection from '../Components/InfoSection/index';
import { homeObjOne, homeObjThree, homeObjTwo } from '../Components/InfoSection/Data';
import Services from '../Components/Services/index';
import Footer from '../Components/Footer';

const Home = () => {
//DECLARE IS OPEN ANG TOGGLING
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/> 
            <InfoSection {...homeObjTwo}/> 
            <Services/>
            <InfoSection {...homeObjThree}/> 
            <Footer/>
        </>
    )
}

export default Home
