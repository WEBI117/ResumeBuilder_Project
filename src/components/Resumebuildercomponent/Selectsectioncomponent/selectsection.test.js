import ReactDOM from 'react-dom/client'
import { render, screen ,cleanup, fireEvent} from '@testing-library/react';
//import App from '../..';
import SelectSection from './selectsection';
import TestRenderer from 'react-test-renderer';
import {create,act} from 'react-test-renderer';
//import "@testing-library/jest-dom/extend-expect"
//
afterEach(cleanup)
const sections = ['Experience', "Education", "Hobbys"]
test('Component renders',() => {
    let container = render(<SelectSection sectionlist={sections}/>)
    container.getByTestId('selectsectioncontainer')
})

test('Component renders sections and active sections', () => {
    let container = render(<SelectSection sectionlist={sections}/>)
    container.getByTestId('inactivesections')
    container.getByTestId('activesections')
})

test('Component has sections in active or inactive sections list',() => {
    let container = render(<SelectSection sectionlist={sections}/>)
    let acsectionlist = container.queryAllByTestId('ac-section')
    let inacsectionlist = container.queryAllByTestId('inac-section')
    let sectionsExist = false
    if(acsectionlist.length > 0 || inacsectionlist.length > 0){
        sectionsExist = true 
    }
    expect(sectionsExist).toBeTruthy()
})

test('Sections in components should be draggable', () => {
    let testrenderer=TestRenderer.create(<SelectSection sectionlist={sections}/>)
    let root=testrenderer.root
    root.findAllByProps({className: 'section'}).map((section) => {
        expect(section.props.draggable).toBe(true)
        expect(section.props.onDragStart).toBeDefined()
    })
})

test('Section is added to active section if it is not already added only', () => {
    let testrenderer=TestRenderer.create(<SelectSection sectionlist={sections}/>)
    let root=testrenderer.root
    let activeSectionsContainer=root.findByProps({className: 'active-sections-container'})
    let inactiveSectionContainer=root.findByProps({className: 'inactive-sections-container'})
    let sectionslist=root.findAllByProps({className: 'section'})
    let containsTestId = (sectionList,testId) => {
        return sectionList.map((sec) => {
            return sec.props['data-testid'] == testId
        })
        .reduce((prev,curr) => {
            return prev || curr
        },false)
    }

    let containsActiveSections = containsTestId(sectionslist,'inac-section')    
    expect(containsActiveSections).toBeTruthy()


    const mp = new Map()
    const testEvent = {
      dataTransfer: {
        setData: function(key, value) {this.tstStorage.set(key, value)},
      //  getData: function(key) {return this.tstStorage.get(key)},
      //  tstStorage: mp
      },
      preventDefault: () => {return}
    };
    //testEvent.dataTransfer.testfunc()
    //testEvent.dataTransfer.setData('a','abc')
    //console.log(mp)
    //console.log(testEvent.dataTransfer.getData('a'))
    //jest.spyOn(testEvent.dataTransfer, 'getData').mockImplementation((key,value) => {
    //    console.log("hello from mock")
    //})
    let spy = jest.spyOn(testEvent.dataTransfer, 'setData').mockImplementation(() => {
        console.log('Hello')
    })
    expect(spy).toHaveBeenCalled()
    act(() => {
        activeSectionsContainer.props.onDragOver(testEvent)
    //    sectionslist[0].props.onDragStart(testEvent)
    //    activeSectionsContainer.props.onDrop(testEvent)
    })

    //sectionslist=root.findAllByProps({className: 'section'})
})
