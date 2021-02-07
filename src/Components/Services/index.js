import React from 'react'
import Icon1 from '../../images/htmlcssjs.svg';
import Icon2 from '../../images/react.svg';
import Icon3 from '../../images/nodejs.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon
, ServicesH2, Servicesp } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>My Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                     <ServicesH2>HTML CSS JS</ServicesH2>
                     <Servicesp>Building a Basic Front-end Website HTML CSS JAVASCRIPT</Servicesp>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                     <ServicesH2>REACT</ServicesH2>
                     <Servicesp>Building a Professional Website by Using React Js Framework</Servicesp>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                     <ServicesH2>NODEJS</ServicesH2>
                     <Servicesp>Deploying and Building own Local Services by Using NodeJs</Servicesp>
                </ServicesCard>




            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
