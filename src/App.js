import React, { useState, useEffect } from 'react';
import Logincomponent from './components/Logincomponent/login'
import Resumebuilder from './components/Resumebuildercomponent/resumebuilder'
import 'bootstrap/dist/css/bootstrap.min.css';
function App(props) {
    let loginStatusUpdateEvent = (e,status) => {
        updateLoginStatus(status)
    }
    // react hook to track state for application login status.
    let [isloggedin,updateLoginStatus]=useState(props.loginstatus);
    // component placeholder determined by login status. Will display login page incase user has not logged in already.
    let [content,setContent] = useState(<Logincomponent loginStatusHandler={loginStatusUpdateEvent}/>);

    useEffect(() => {
        if(!isloggedin){
            setContent(<Logincomponent loginStatusHandler={loginStatusUpdateEvent}/>)
        }
        else{
            setContent(<Resumebuilder loginStatusUpdateEvent={loginStatusUpdateEvent}/>)
        }
    },[isloggedin])

    // function to be passed to children page components to trigger loggin status changes in parent component.
    // 

    //if(!isloggedin){
    //    content=<Logincomponent loginStatusHandler={loginStatusUpdateEvent}/>
    //}
    //else{
    //    content=<Resumebuilder/>
    //}
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
