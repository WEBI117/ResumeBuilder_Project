import ReactDOM from 'react-dom/client'
import { render, screen ,cleanup, fireEvent} from '@testing-library/react';
//import App from '../..';
import Layoutsection from './layoutsection';
import TestRenderer from 'react-test-renderer';
//import {create,act} from 'react-test-renderer';
//import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
test('Compnent renders',()=>{
    const container = render(<Layoutsection/>)
    container.getByTestId('layoutcontainer')
})

