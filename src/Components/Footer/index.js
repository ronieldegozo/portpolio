import React from 'react'
import {FooterContainer, FooterWrap,FooterLinksContainer, FooterLinksWrapper,
    FooterLinkItems ,FooterLinkTitle, FooteLink, SocialMedia,
        SocialIcons, SocialIconLink} from './FooterElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'   
import {animateScroll as scroll} from 'react-scroll'; //ANIMATE SCROLL



//ANIMATION SCROLL TO TOP
const toggleHome = () =>{
    scroll.scrollToTop();
  } 

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    {/*COLLUMN 1*/}
                    <FooterLinksWrapper>
                    
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooteLink to="/" onClick={toggleHome}>Mc Roniel De Gozo</FooteLink>
                                <FooteLink to="/">Testimonials</FooteLink>
                                <FooteLink to="/">Careers</FooteLink>
                                <FooteLink to="/">Investor</FooteLink>
                                <FooteLink to="/">Terms of Service</FooteLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Me</FooterLinkTitle>
                                <FooteLink to="/">How it Works</FooteLink>
                                <FooteLink to="/">Testimonials</FooteLink>
                                <FooteLink to="/">Careers</FooteLink>
                                <FooteLink to="/">Investor</FooteLink>
                                <FooteLink to="/">Terms of Service</FooteLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    {/*COLLUMN 2*/}


                </FooterLinksContainer>


                <SocialMedia>                       
                        <div className="container " >
                            <div className="row justify-content-center">
                                <SocialIcons className="col-2">
                                <SocialIconLink href="https://www.facebook.com/ronieldegozo04" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                                </SocialIcons>
                                
                                <SocialIcons className="col-2">
                                    <SocialIconLink href="https://ronieldegozo.000webhostapp.com/Midterm/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                                </SocialIcons>

                                <SocialIcons className="col-2">
                                    <SocialIconLink href="https://www.youtube.com/channel/UCSOmpjTnITaChi6TADfx3-Q" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                                </SocialIcons>

                                <SocialIcons className="col-2">
                                    <SocialIconLink href="https://www.linkedin.com/in/mc-roniel-de-gozo-6466711b8/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                                </SocialIcons>

                                <SocialIcons className="col-2">
                                    <SocialIconLink href="https://github.com/ronieldegozo" target="_blank" aria-label="Github"><FaGithub/></SocialIconLink>
                                </SocialIcons>

                            </div>
                        </div>

                        <div className="footer-copyright text-center py-3">
                          <strong>&#169; {new Date().getFullYear()}  All rights reserve Mc Roniel De Gozo</strong>
                        </div>
                     
      
                </SocialMedia>
                
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
