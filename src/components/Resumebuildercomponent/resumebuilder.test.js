import ReactDOM from 'react-dom/client'
import { render, screen ,cleanup, fireEvent} from '@testing-library/react';
//import App from '../..';
import Resumebuilder from './resumebuilder'
import TestRenderer from 'react-test-renderer';
//import {create,act} from 'react-test-renderer';
//import "@testing-library/jest-dom/extend-expect"
//

afterEach(cleanup)
test('Component is rendered correctly.', () => {
    const container = render(<Resumebuilder/>)
    container.getByTestId('parent')
})
