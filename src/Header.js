import React from "react";
import Logo from './Gomex_logo.webp'
import {Bars, Nav, NavLink, NavLogo, NavMenu,} from "./NavbarElements";


export default function Header() {

    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <img src={Logo} height={52} width={90}/>
                </NavLogo>
                <Bars/>

                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/portfolio" activeStyle>
                        Portfolio
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>

    );
};

