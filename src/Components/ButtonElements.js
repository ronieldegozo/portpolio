import styled from 'styled-components';
import {Link} from 'react-scroll';


export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? 'linear-gradient(to left, #1542be 0%, #ad307d 100%)': 'linear-gradient(to left, #ad307d 0%, #1542be 100%)')};


white-space: nowrap;
padding: ${({big}) =>(big? '14px 48px': '12px 30px')};
color: ${({dark}) => (dark ? '#fff': '#fff')};
font-size: ${({fontBig}) => (fontBig ? '30px' : '20px')};
font-weight: bold;
letter-spacing: 3px;
outline: none;
border: none;
font-family: 'Sirin Stencil', cursive;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? 'linear-gradient(to left, #ad307d 0%, #1542be 100%)': 'linear-gradient(to left, #1542be 0%, #ad307d 100%)')};


}
`