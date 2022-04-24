import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
//import Container from 'react-bootstrap/Container'
//import Col from 'react-bootstrap/Col'
import './selectsection.css'

let SelectSection = ({sectionList,selectedSectionChangeHandler,activeLayoutChangeHandler}) => {
    const sectionlist = sectionList
    let [inactiveSectionList,setInactiveSectionList]=useState(sectionlist)
    let [activeSectionList,setActiveSectionList]=useState([])
    // currently selected.
    let [selectedSection,setSelectedSection]=useState(null)

    useEffect(() => {
        selectedSectionChangeHandler(selectedSection)
    },[selectedSection])

    useEffect(() => {
        activeLayoutChangeHandler(activeSectionList)
    },[activeSectionList])

    let dragStartHandler = (ev,section) => {
        ev.dataTransfer.setData('Text',section)
    }

    let dragOverHandler = (ev) => {
        ev.preventDefault()
    }

    let toggleActiveDropHandler = (ev,addlist,addlistupdator,removelist,removelistUpdator) => {
        let sectionName = ev.dataTransfer.getData('text')
        if(addlist.includes(sectionName)){
            return
        }
        else{
            let newaddlist = [...addlist]
            let newremovelist = [...removelist]
            newaddlist.push(sectionName)
            newremovelist=newremovelist.filter((sec) => {
                return (sec != sectionName)
            })
            addlistupdator(newaddlist)
            removelistUpdator(newremovelist)
        }
    }

    let positionDropHandler = (ev,currentSectionName,addlist,addlistupdator,removelist,removelistUpdator) => {
        let sectionName = ev.dataTransfer.getData('Text')
        if(!addlist.includes(sectionName)){
            toggleActiveDropHandler(ev,addlist,addlistupdator,removelist,removelistUpdator)
        }
        else{
            let newlist=[...addlist]
            let tempindex=newlist.indexOf(sectionName)
            newlist[newlist.indexOf(currentSectionName)]=sectionName
            newlist[tempindex]=currentSectionName
            addlistupdator(newlist)
        }
    }

    // create list for inactive section
    let inactivesections = inactiveSectionList.map((section) => {
        return(
            <div className='section' key={section} draggable data-testid='inac-section' 
            onDragStart={(e) => dragStartHandler(e,section)} onClick={(e) => {setSelectedSection(section)}} 
            onDrop={(e) => {positionDropHandler(e,section,inactiveSectionList,setInactiveSectionList,activeSectionList,setActiveSectionList)}}>
                    {section}
            </div>
        )
    })
    // create list for active section
    let activesections = activeSectionList.map((section) => {
        return(
            <div className='section' key={section} draggable data-testid='ac-section' 
            onDragStart={(e) => {dragStartHandler(e,section)}} onClick={(e) => {setSelectedSection(section)}}
            onDrop={(e) => {positionDropHandler(e,section,activeSectionList,setActiveSectionList,inactiveSectionList,setInactiveSectionList)}}>
                {section}
            </div>
        )
    })

    return(
        <div data-testid='selectsectioncontainer'>
            <Row>
                <p>Inactive sections</p>
                <div className='active-sections-container' data-testid='inactivesections' 
                onDragOver={(e) => {dragOverHandler(e)}} onDrop={(e) => {toggleActiveDropHandler(e,inactiveSectionList,setInactiveSectionList,activeSectionList,setActiveSectionList)}}>
                    <Row>
                        {inactivesections}
                    </Row>
                </div>
            </Row>
            <Row>
                <p>Active sections</p>
                <div className='inactive-sections-container' data-testid='activesections' 
                onDragOver={(e) => {dragOverHandler(e)}} onDrop={(e) => {toggleActiveDropHandler(e,activeSectionList,setActiveSectionList,inactiveSectionList,setInactiveSectionList)}}>
                    <Row>
                       {activesections}
                    </Row>
                </div>
            </Row>
        </div>
    )
}
export default SelectSection;

//<button onClick={testfunc}>test</button>
