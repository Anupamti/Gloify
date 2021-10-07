import React from 'react'
import { Icons, LinkContainer, NavbarPage, NavBottom, NavLogout, NavTop, SelectedIcon } from './navbarStyles'
import Logout from '@mui/icons-material/Logout';
import { navbar } from '../data/navbardata';
import {
    useLocation
} from "react-router-dom";
import SelectInput from '@mui/material/Select/SelectInput';

function Navbar() {
    const { pathname } = useLocation();
    return (
        <NavbarPage>
            <NavTop>
                <img style={{ height: '95%', width: '70%' }} src="https://devza.com/images/devza-light.png" alt="logo" />
            </NavTop>
            <NavBottom>
                {
                    navbar.map((data) => (
                        <>
                            <LinkContainer key={data.id} to={data.path}>
                                {
                                    pathname === data.path ?
                                        (<SelectedIcon > <data.icon sx={{ fontSize: 30 }} /></SelectedIcon>) : (<Icons>
                                            <data.icon sx={{ fontSize: 30 }} />
                                        </Icons>)
                                }
                            </LinkContainer>
                        </>

                    ))
                }
            </NavBottom>
            <NavLogout>
                <Logout sx={{ fontSize: 30 }} />
            </NavLogout>
        </NavbarPage>
    )
}

export default Navbar
