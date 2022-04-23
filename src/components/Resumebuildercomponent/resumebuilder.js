import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Layoutsection from './Layoutsectioncomponent/layoutsection'
import "./resumebuilder.css"

let Resumebuilder = () => {
    return(
        <div className="parentcontainer" data-testid="parent">
            <Row>
                <Col lg={2} md={2}>
                    <div className='selectioncontainer'>
                        <Layoutsection/>
                    </div>
                </Col>
                <Col lg={8} md={8}>
                    <div className='buildercontainer'>
                    </div>
                </Col>
                <Col lg={2} md={2}>
                    <div className='layoutcontainer'>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Resumebuilder;
