import React from "react";
import {Bars, Nav, NavLink, NavLogo, NavMenu,} from "./NavbarElements";

// Logo flush left
// Nav flush right
// Center "Gomez Adams"
export default function Header(props) {

    return (
        <>
            <Nav>
                <NavLogo to="/">
                    Logo
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
                    <NavLink to="/admin" activeStyle>
                        Admin
                    </NavLink>
                </NavMenu>
            </Nav>
        </>

    );
};

