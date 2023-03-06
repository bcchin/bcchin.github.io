import "../styles/Footer.css"

import React from "react"
import { BsGithub, BsLinkedin, BsInstagram} from "react-icons/bs"
import { FaFlickr } from "react-icons/fa"

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/bonniechin" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
                <a href="https://www.instagram.com/bonnie.chin/" target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
                <a href="https://github.com/bcchin" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
                <a href="https://www.flickr.com/photos/148300792@N03/" target="_blank" rel="noreferrer">
                    <FaFlickr />
                </a>
            </div>
            <p> &copy; 2023 bonnie chin </p>
        </div>
    )   
}

export default Footer 