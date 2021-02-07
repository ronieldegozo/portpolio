    import React, {useState} from 'react'

    import { Button } from '../ButtonElements';
    import Video from '../../Videos/video2.mp4';
    import {HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1, HeroP,  HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

    import 'bootstrap/dist/css/bootstrap.min.css';
    const HeroSection = () => {

        const [hover, setHover ]= useState(false)
        const onHover = () => {
            setHover(!hover);
        }

        return (
            <HeroContainer>
                <HeroBg>
                    <VideoBg     autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Welcome To Roniel's Website</HeroH1>
                    <HeroP>
                    “Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as
                    the perception they have of you before they walk through the door.”
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" className="text-white" MouseEnter={onHover} onMouseLeave={onHover} primary="false" dark="true">
                            Get Started {hover ? <ArrowForward/>: <ArrowRight/> }
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        )
    }

    export default HeroSection
