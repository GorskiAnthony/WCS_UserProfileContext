import React from "react";
import {NavLink} from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function Header({currentUserAvatar, currentUserName}) {
    return (
        <header>
            <nav>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/profile">
                    <UserAvatar />
                </NavLink>
            </nav>
        </header>
    );
}
