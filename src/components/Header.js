import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li>
                <NavLink exact={true} activeClassName="is-active" to="/">Dashboard</NavLink>
            </li>
            <li>
                <NavLink activeClassName="is-active" to="/create">Create</NavLink>
            </li>
        </ul>
    </header>
)

export default Header;