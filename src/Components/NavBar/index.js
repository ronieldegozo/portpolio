import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'; //INSTALL A REACT ICONS
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import logo from '../NavBar/logo.png';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll'; //ANIMATE SCROLL


const NavBar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () =>{
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }
  
  useEffect(() =>{
    window.addEventListener('scroll', changeNav )
  }, [])


//ANIMATION SCROLL TO TOP
  const toggleHome = () =>{
    scroll.scrollToTop();
  } 

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>  {/*SIDE BAR COLOR COLLPASE*/}
            <Nav scrollNav={scrollNav}>
              <NavBarContainer>
                <NavLogo to="/" onClick={toggleHome} >
                <img src={logo}/>
                  <span>R</span>
                  <span>O</span>
                  <span>N</span>
                  <span>I</span>
                  <span>E</span>
                  <span>L</span>
                </NavLogo>

                <MobileIcon onClick={toggle}>     {/*DECLARE IS OPEN ANG TOGGLING*/}
                  <FaBars/>
                </MobileIcon>

                <NavMenu>
                  <NavItem>
                    <NavLinks to="about" smooth={true} duration={600} spy={true} exact="true" offset={-80}>About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="certification"smooth={true} duration={600} spy={true} exact="true" offset={-80} >Certification</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="services" smooth={true} duration={600} spy={true} exact="true" offset={-80} >Services</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="team" smooth={true} duration={600} spy={true} exact="true" offset={-80} >Team</NavLinks>
                  </NavItem>
                </NavMenu>

                <NavBtn>
                  <NavBtnLink to="/" >Sign In</NavBtnLink>
                </NavBtn>


              </NavBarContainer>
            </Nav>
        </IconContext.Provider>
      </>
    )
} 

export default NavBar
