import React, { Component } from 'react'
import logo from '../images/logo.svg'

export class Header extends Component {
    render() {
        return (
            <header>
                <section className="header-title">
                    <img src={ logo } alt="Logo" />
                </section>
                <ul className="header-menu">
                    <li className="menu-item">About</li>
                    <li className="menu-item">Discover</li>
                    <li className="menu-item">Get Started</li>
                </ul>
            </header>
        )
    }
}

export default Header;
