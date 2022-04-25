import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import SelectSection from './Selectsectioncomponent/selectsection'
import Topbar from './Topbarcomponent/topbar'
import "./resumebuilder.css"

let Resumebuilder = (props) => {
    const sections = ['Experience', "Education", "Hobbys"]
    let sectionChangeHandler = (newsection) => {
        console.log(newsection)
    }
    let activeSectionLayoutHandler = (layout) => {
        console.log(layout)
    }
    let logoutEvntHandler = () => {
        // would want to call a logut handler in this function
        // props.logouthandler()
        console.log("loggin out")
        props.loginStatusUpdateEvent(null,false)
    }
    return(
        <div className="parentcontainer" data-testid="parent">
            <Row>
                <Col lg={2} md={2}>
                    <div className='selectioncontainer'>
                        <SelectSection 
                        sectionList={sections} 
                        selectedSectionChangeHandler={(section) => {sectionChangeHandler(section)}} 
                        activeLayoutChangeHandler={(layout) => {activeSectionLayoutHandler(layout)}}
                    />
                    </div>
                </Col>
                <Col>
                    <div className='buildercontainer'>
                        <Row>
                            <Topbar logoutEventHandler={logoutEvntHandler}/>
                        </Row>
                        <Row>
                            <h1>
                                Section Title
                            </h1>
                            <ul>
                                <li>subsection1</li>
                                <li>subsection2</li>
                                <li>subsection3</li>
                            </ul>
                            <Row>
                                <Col>
                                    <button>Add subsection</button>
                                </Col>
                                <Col>
                                    <button>Save section</button>
                                </Col>
                                <Col>
                                    <button>Remove subsection</button>
                                </Col>
                            </Row>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Resumebuilder;
