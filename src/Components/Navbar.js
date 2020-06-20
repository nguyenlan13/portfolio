import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import {SocialMediaIconsReact} from 'social-media-icons-react';


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
            <Link>
                <li>Contact</li>
            </Link>
            <SocialIcon url="https://www.linkedin.com/in/lan-nguyen-mba/" />
            <SocialIcon url="https://github.com/nguyenlan13" />
            <SocialIcon url="https://medium.com/@nguyenlan13" />
            {/* <SocialMediaIconsReact icon="github" url="https://github.com/nguyenlan13"/> */}
        </nav>
    );
}


export default Navbar;