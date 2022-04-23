import ReactDOM from 'react-dom/client'
import { render, screen ,cleanup, fireEvent} from '@testing-library/react';
//import App from '../..';
import Logincomponent from './login';
import TestRenderer from 'react-test-renderer';
//import {create,act} from 'react-test-renderer';
//import "@testing-library/jest-dom/extend-expect"
//

afterEach(cleanup)
test('Compnent renders',()=>{
    const container = render(<Logincomponent/>)
    container.getByTitle('logincomponent')
})

test('Component renders correctly', () => {
    const container = TestRenderer.create(<Logincomponent/>)
    let tree = container.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Button is disabled when component renders', () => {
    const container = render(<Logincomponent/>)
    let button=container.getByRole('button')
    expect(button).toBeDisabled()
})

test('Button is enabled when input for both input fields is entered only', () => {
    const container = render(<Logincomponent/>)
    let passwordinput = container.getByTestId('pass')
    let emailinput = container.getByTestId('email')
    let button = container.getByRole('button')
    expect(button).toBeDisabled()

    fireEvent.change(passwordinput,{target: {value: "test"}})
    expect(button).toBeDisabled()

    fireEvent.change(passwordinput,{target: {value: ""}})
    fireEvent.change(emailinput,{target: {value: "test"}})
    expect(button).toBeDisabled()

    fireEvent.change(passwordinput,{target: {value: "test"}})
    fireEvent.change(emailinput,{target: {value: "test"}})

    expect(button).toBeEnabled()
})

test('Component has Email input field', () => {
    const container = render(<Logincomponent/>)
    let emailinputcontainer = container.getByTitle('emailinput')
    let label = container.getByText('Email:')
    let inputfiled = container.getByTestId('email')
})

