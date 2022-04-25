import ReactDOM from 'react-dom/client'
import { render, screen ,cleanup, fireEvent} from '@testing-library/react';
import App from '../../../App';
import TestRenderer from 'react-test-renderer';
import {create,act} from 'react-test-renderer';
//import "@testing-library/jest-dom/extend-expect"
import Topbar from './topbar'
import Resumebuilder from './../resumebuilder'

afterEach(cleanup)
test('Component rendered',() => {
    let container = render(<Topbar/>)
    container.getByTestId('topbar')
})
test('Component has logout button',() => {
    let renderer = TestRenderer.create(<Topbar/>)
    let root = renderer.root
    
    let button = root.findByProps({className: 'logout-button'})
    expect(button.props.onClick).toBeDefined()
})
test('Component has logout event handler function passed in props', () => {
    let renderer = TestRenderer.create(<Resumebuilder/>)
    let root = renderer.root

    let topbar=root.findByType(Topbar)
    expect(topbar.props.logoutEventHandler).toBeDefined()
})
test('Component logout button takes us to login page.', () => {
    //let renderer=TestRenderer.create(<App loginstatus={true}/>)
    //let root = renderer.root
    //let logoutButton = root.findByProps({className: 'logout-button'})

    //act(()=>{
    //    logoutButton.props.onClick()
    //    expect(renderer.toJSON()).toMatchSnapshot()
    //})
})
