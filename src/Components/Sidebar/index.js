//SIDE BAR
import React from 'react'
import '../Sidebar/style.css';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoutes} from './SidebarElements';


// rafce            //DECLARE IS OPEN ANG TOGGLING
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu className="sideMenu">
                    <SidebarLink to="about"  onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="certification"  onClick={toggle}>Certification</SidebarLink>
                    <SidebarLink to="services"  onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="team"  onClick={toggle}>Team</SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoutes to="/">Sign In</SidebarRoutes>
                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
