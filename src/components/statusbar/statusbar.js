import React from 'react'
import { navbar } from '../data/navbardata'
import { StatusbarPage, StatusLeft, StatusRight } from './statusBarStyles'
import {
    useLocation
} from "react-router-dom";
function Statusbar() {
    const { pathname } = useLocation();
    return (
        <StatusbarPage>
            {
                navbar.map((data) => (
                    <>
                        {pathname === data.path && (
                            <StatusRight key={data.id}> <h2 style={{ paddingLeft: '30px' }}>{data.title}</h2></StatusRight>
                        )}
                    </>
                ))
            }
            <StatusLeft><img style={{ marginRight: '20px', height: '40px', width: '40px', borderRadius: '100%' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png" alt="profileimage" /> <h4>Arpit</h4></StatusLeft>
        </StatusbarPage>
    )
}

export default Statusbar
