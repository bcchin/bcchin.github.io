import 'bootstrap/dist/css/bootstrap.min.css'

import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function About() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>pronouns</h2>
                </Col>
                <Col>
                    <h2>Hey! I'm Bonnie - A Software Engineer based in San Francisco</h2>
                    <p id="about-me">
                        I was previously a software development engineer at <b>Zoom</b>, where I was a 
                        member of the ETL Team within their Big Data Platform. As part of the ETL Team,
                        I performed data explorations and validations in SQL, and I also built data pipelines
                        using Spark and Scala for internal downstream teams.
                        <br /><br />
                        Prior to that, I interned at <b>Goldman Sachs</b> as a Summer Engineering Analyst on
                        their Data Lake Team. During my time there, I wrote two microservices in Java to improve their
                        data replication process and backup procedure between HBase and ElasticSearch.
                        <br /><br />
                        I received my BA in Economics and Computer Science from Colgate University in May 2022.
                        <br /><br />
                        While my industry experience thus far mainly lies in the data engineering space,
                        I am open and eager to explore opportunities in backend, frontend, and more!
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About 