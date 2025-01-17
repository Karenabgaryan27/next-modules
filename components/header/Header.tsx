import React from "react";
import { Navbar, ModeToggle } from "@/components/index.js";

const Header = () => {
    return (
        <header>
            <Navbar />
            <ModeToggle/>
        </header>
    );
};

export default Header;
