import Row from 'react-bootstrap/Row'
import React, { useState, useEffect } from 'react';
import './subsection.css'

let Subsection = ({arrayindex,removeHandler}) => {
    let [inEdit,setInEdit] = useState(false)
    let [buttonText,setButtonText] = useState('Edit')
    let [dataObj,setDataObj] = useState({
        heading: 'Heading',
        date: 'date',
        description: 'description'
    })

    useEffect(() => {
        if(inEdit){
            setContent(editModeContent)
            setButtonText('Save')
        }
        else{
            setContent(viewModeContent)
            setButtonText('Edit')
        }
    },[inEdit])

    let editClickHandler = () => {
        if(inEdit){
            setInEdit(false)
        }
        else{
            setInEdit(true)
        }
    }

    let onChangeHandler = (ev,objectKey) => {
        var newobj = dataObj
        newobj[objectKey]=ev.target.value
        setDataObj(newobj)
    }

    let viewModeContent = () => {
        return(
            <div>
                <Row>
                    <h2 data-testid='subsec-title'>{dataObj.heading}</h2>
                </Row>
                <Row>
                    <p data-testid='subsec-date'>{dataObj.date}</p>
                </Row>
                <Row>
                    <p data-testid='subsec-description'>{dataObj.description}</p>
                </Row>
            </div>
        )
    }
    let editModeContent = () => {
        return(
            <div>
                <Row>
                    <Row>
                        <label>Heading:</label>
                    </Row>
                    <Row>
                        <input data-testid='subsec-title-input' onChange={(ev) => onChangeHandler(ev,'heading')}></input>
                    </Row>
                </Row>
                <Row>
                    <Row>
                        <label>Date:</label>
                    </Row>
                    <Row>
                        <input data-testid='subsec-date-input' onChange={(ev) => onChangeHandler(ev,'date')}></input>
                    </Row>
                </Row>
                <Row>
                    <Row>
                        <label>Description</label>
                    </Row>
                    <Row>
                        <textarea data-testid='subsec-description-input' onChange={(ev) => onChangeHandler(ev,'description')}></textarea>
                    </Row>
                </Row>
            </div>
        )
    }
    
    let [content,setContent] = useState(viewModeContent())
    return(
        <div className='subsection-container' data-testid='subsectioncontainer'>
            <Row>
                {content}
            </Row>
            <button onClick={(ev) => {editClickHandler()}}>{buttonText}</button>
            <button hidden={!inEdit} onClick={(ev) => {removeHandler(arrayindex)}}>Delete</button>
        </div>
    )
}
export default Subsection;
