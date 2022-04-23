import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import './login.css'

let Logincomponent = (props) => {
    let [buttonState,setButtonState]=useState(true)
    let [inputValues,setInputValues]=useState({email: '', password: ''})

    let updateButtonState = (inputValuesState) => {
        if(inputValuesState.email=='' || inputValuesState.password==''){
            setButtonState(true)
        }
        else{
            setButtonState(false)
        }
    }

    let onInputChange = (e) => {
        let prev = {...inputValues}
        if(e.target.id=='email-input'){
            prev.email=e.target.value
            setInputValues(prev)
        }
        else if(e.target.id=='password-input'){
            prev.password=e.target.value
            setInputValues(prev)
        }
        updateButtonState(prev)
    }

    let clickHandler = (e) =>{
        e.preventDefault();
        console.log(inputValues)
        props.loginStatusHandler(e,true)
    }

    return(
        <div title='logincomponent'className='login'>
            <Container>
                <Col md={{offset: 5, span: 2}}>
                    <Row title="emailinput">
                        <Col md={2}>
                            <Row>
                                <div>
                                    <label htmlFor='email' className='label'>Email: </label>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <input type='text' id='email-input' className='input' data-testid='email' value={inputValues.email} onChange={onInputChange}></input>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row title="passwordinput">
                        <Col md={2}>
                            <Row>
                                <div>
                                    <label htmlFor='pass' className='label'>Password: </label>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <input type='text' id='password-input' className='input' data-testid='pass' value={inputValues.password} onChange={onInputChange}></input>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{height: "20px"}}>
                    </Row>
                    <Row>
                        <Col md={1}>
                            <button id='loginbutton' onClick={clickHandler} disabled={buttonState}>Login</button>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default Logincomponent
