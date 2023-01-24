import React from 'react';
import { Outlet, Link } from "react-router-dom";
import styles from './style.module.css'

const Header = () => {
    return (
        <>
            <header id="header" className={styles.siteHeader + " site-header"}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Header;