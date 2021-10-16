import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header>
                <section className="header-title">
                    <h1>crowdfund</h1>
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
