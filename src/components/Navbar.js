import "../styles/Navbar.css"

import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"

function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation()
    
    // Closes Navbar after user makes a selection (Only when screen is too small)
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button 
                    onClick={() => {
                        setExpandNavbar((expandNavbar) => !expandNavbar)}}
                ><AiOutlineMenu />
                </button>
            </div>
            <div className="links"> 
                <Link to="/"> home </Link>
                <Link to="/about"> about </Link>
                <Link to="/experience"> experience </Link>
            </div>
        </div>
    )
}

export default Navbar 