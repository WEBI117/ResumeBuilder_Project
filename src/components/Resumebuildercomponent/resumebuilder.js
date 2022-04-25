import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import SelectSection from './Selectsectioncomponent/selectsection'
import Subsection from './Subsectioncomponent/subsection'
import Topbar from './Topbarcomponent/topbar'
import "./resumebuilder.css"

let Resumebuilder = (props) => {
    const sections = ['Experience', "Education", "Hobbys"]
    let [selectedSection,setSelectedSection] = useState()
    let [sectionDataObject,setSectionDataObject] = useState({})
    let [subsectionList,setSubsectionList] = useState([])


    // An effect hook that initilaizes the sectionObject array....May be used to populate it with data from the backend
    useEffect(() => {
        let obj={}
        sections.map((sec) => {
            obj[sec]=[<Subsection key={sec+0} arrayindex={0} removeHandler={removePartial(selectedSection,subsectionList,setSubsectionList,sectionDataObject,setSectionDataObject)}/>]
        })
        setSectionDataObject(obj)
        setSelectedSection(sections[0])
    },[])
    //useEffect(() => {
    //    console.log(sectionDataObject)
    //},[sectionDataObject])

    // Hook to update list with correct subsecion components.
    useEffect(() => {
        setSubsectionList(sectionDataObject[selectedSection])
    }, [selectedSection])
    // Fucntion that updates the current selected section as selected in the SelectSection child component.
    let sectionChangeHandler = (newsection) => {
        setSelectedSection(newsection)
    }
    // Fuunction which updates the current layout for our resume as in the SelectSection child component.
    let activeSectionLayoutHandler = (layout) => {
        //console.log(layout)
    }
    // Event handler to propogate logout event upwards incase someone clicks the logout button.
    let logoutEvntHandler = () => {
        //console.log("loggin out")
        props.loginStatusUpdateEvent(null,false)
    }
    // Handler to add subsection to current subsection list
    let addSubsectionHandler = (selectedSection,subseclist,subseclistUpdater,dataObject,dataObjectUpdater) => {
        var newList = [...subseclist]
        var index = subseclist.length
        newList.push(<Subsection key={selectedSection+index} arrayindex={index} removeHandler={removePartial(selectedSection,subseclist,subseclistUpdater,dataObject,dataObjectUpdater)}/>)
        subseclistUpdater(newList)
        var newDataObject = dataObject
        newDataObject[selectedSection] = newList
        dataObjectUpdater(newDataObject)
    }
    // Handler to remove a subsection from the current list
    let removePartial = (selectedsection,sslist,sslistupdater,dataobject,dataobjectupdater) => {
        return (index) => {
            debugger
            let newSubsecList=[...sslist]
            newSubsecList.splice(index,1)
            sslistupdater(sslist)
            let newsectionDataObject={...dataobject}
            newsectionDataObject[selectedsection]=newSubsecList
            dataobjectupdater(newsectionDataObject)
        }
    }

    let removeSubsectionHandler = (index) => {
        let func=removePartial(selectedSection,subsectionList,setSubsectionList,sectionDataObject,setSectionDataObject)
        func(index)
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
                                {selectedSection}
                            </h1>
                            <ul>
                                {subsectionList}
                            </ul>
                            <Row>
                                <Col>
                                    <button onClick={(ev) => {addSubsectionHandler(selectedSection,subsectionList,setSubsectionList,sectionDataObject,setSectionDataObject)}}>Add subsection</button>
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
