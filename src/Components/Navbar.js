import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <Link>
                <li>About</li>
            </Link>
            <Link>
                <li>Blog</li>
            </Link>
            <Link>
                <li>Projects</li>
            </Link>
            <Link>
                <li>outLANdish designs</li>
            </Link>
        </nav>
    );
}


export default Navbar;