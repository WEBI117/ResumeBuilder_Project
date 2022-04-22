import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import './login.css'

let Logincomponent = (props) => {
    let clickHandler = (e) =>{
        e.preventDefault();
        props.loginStatusHandler(e,true)
    }

    return(
        <div className='login'>
            <Container>
                <Row>
                    <Col md={2}>
                        <Row>
                            <label htmlFor='email' className='label'>Email: </label>
                        </Row>
                        <Row>
                            <input type='text' id='email' className='input'></input>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <Row>
                            <label htmlFor='pass' className='label'>Password: </label>
                        </Row>
                        <Row>
                            <input type='text' id='pass' className='input'></input>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={1}>
                        <div className='buttoncontainer'>
                            <p>hello</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={1}>
                        <button onClick={clickHandler}>Login</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Logincomponent
