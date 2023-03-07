import "../styles/Home.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import headshot from "../images/headshot.jpg"
import resume from "../Bonnie_Chin_Resume_2023.pdf"

import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Typewriter from "typewriter-effect"
import { BsGithub, BsLinkedin, BsInstagram} from "react-icons/bs"
import { FaFlickr } from "react-icons/fa"

function Home() {
    return (

        <Container>
            <Row>
                <Col className="left-col">
                    <div><h1 className="home-title">Hello, World! 👋<br />I'm <span>Bonnie</span></h1></div>
                    <div className="home-subtitle">
                        <Typewriter
                            options={{
                                strings: ['a developer', 'a creator', 'a traveler', 'a music lover'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className="blurb">
                        <p><i>* i am currently pursuing full-time software engineering opportunities *</i></p>
                    </div>
                    <div className="resume">
                        <a href={resume} class="resume-link" target="_blank" rel="noreferrer">
                            <button>résumé</button>
                        </a>
                    </div>
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
                </Col>
                <Col className="right-col">
                    <Image className="headshot"
                        src={headshot}
                        alt="a photo of me in munich" 
                        fluid
                        roundedCircle
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Home 