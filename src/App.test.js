import ReactDOM from 'react-dom/client'
import { render, screen , cleanup} from '@testing-library/react';
import App from './App';
import TestRenderer from 'react-test-renderer';
import {create,act} from 'react-test-renderer';
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
test('Application is rendered', () => {
    const div = document.createElement('div');
    const root = ReactDOM.createRoot(div)
})

test('Application login tab renders correctly', ()=> {
    const tree = TestRenderer.create(<App loginstatus={false}/>).toJSON()
    expect(tree).toMatchSnapshot()
})

