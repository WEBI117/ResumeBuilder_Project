import ReactDOM from 'react-dom/client'
import { render, screen ,cleanup, fireEvent} from '@testing-library/react';
//import App from '../..';
import Subsection from './subsection'
import TestRenderer from 'react-test-renderer';
//import {create,act} from 'react-test-renderer';
//import "@testing-library/jest-dom/extend-expect"

test('component renders correctly', () => {
    let container = render(<Subsection/>)
    container.findByTestId('subsectioncontainer')
})
