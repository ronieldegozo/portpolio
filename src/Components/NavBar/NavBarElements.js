
//CSS STYLED

import styled from 'styled-components'; //install a styled-components
import {Link as LinkRouter} from 'react-router-dom'; //install a react router dom
import {Link as LinkScroll} from 'react-scroll'; //install a react scroll


export const Nav = styled.nav
`
background: ${({ scrollNav }) => (scrollNav ? '#000' : '#000')};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;


@media screen and(max-width: 960px){
    transition: 0.8s all ease;
    
}`;

export const NavBarContainer  = styled.div
`display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width 1100px;

`;

export const NavImg = styled.div`
height: 60px;
width: 60px;
margin-top: 2%;
margin-right: 16px;
`;


export const NavLogo = styled(LinkRouter)
`
font-family: 'New Rocker', cursive;

letter-spacing: 5px;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 14px;
font-weight: bold;
text-decoration: none;


img{
    height: 60px;
    width: 60px;
    margin-top: 2%;
    margin-right: 16px;
}

span{
    display: table-cell;
    margin: 0;
    padding: 0;
    animation: animate 2s linear infinite;
    font-family: 'New Rocker', cursive;
}

span:nth-child(1){
    animation-delay:  0s;
}
span:nth-child(2){
    animation-delay:  0.25s;
}
span:nth-child(3){
    animation-delay:  0.5s;
}
span:nth-child(4){
    animation-delay:  0.75s;
}
span:nth-child(5){
    animation-delay:  1s;
}
span:nth-child(6){
    animation-delay:  1.25s;    
}

@keyframes animate
{
    0%,100%{
        color: rgb(200, 220, 250);
        filter: blur(2px);
        text-shadow:  0 0 10px #a6e0f8,
                     0 0 20px #a6e0f8,
                     0 0 40px #a6e0f8,
                     0 0 80px #a6e0f8,
                     0 0 120px #a6e0f8,
                     0 0 200px #a6e0f8;
    }
    5%,95%{
        color: rgb(255, 255, 255);
        filter: blur(0px);
        text-shadow:  none;
    }
}
`;

export const MobileIcon = styled.div
`display: none; 

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right:0 ;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}`;

export const NavMenu  = styled.ul
`display: flex;
color: #fff;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;


@media screen and (max-width: 768px){
    display: none;
    
}`;

export const NavItem = styled.li

`height: 80px;

`;

export const NavLinks = styled(LinkScroll)
`color: #fff;
font-family: 'New Rocker', cursive;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active{
    color: #ad307d;
}`;







//nav btn screen size small
export const NavBtn = styled.nav`
font-family: 'Sirin Stencil', cursive;
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: none;
    font-family: 'New Rocker', cursive;
}
`

export const NavBtnLink = styled(LinkRouter)`
font-family: 'New Rocker', cursive;
border-radius: 50px;
background: linear-gradient(to left, #1542be 0%, #ad307d 100%);
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2 ease-in-out;
    background: linear-gradient(to left, #ad307d 0%, #1542be 100%);
    color: #fff;
}
`;

