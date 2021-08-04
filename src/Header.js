import React from "react";
import {Bars, Nav, NavLink, NavLogo, NavMenu,} from "./NavbarElements";

export default function Header() {

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

