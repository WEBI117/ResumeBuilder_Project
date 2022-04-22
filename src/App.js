import React, { useState } from 'react';
import Logincomponent from './components/Logincomponent/login'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    let [islogged,updateLoginStatus]=useState(false);
    let content;
    let loginStatusUpdateEvent = (e,status) => {
        updateLoginStatus(status)
    }

    if(!islogged){
        content=<Logincomponent loginStatusHandler={loginStatusUpdateEvent}/>
    }
    else{
        content=<p>Logged In</p>
    }
  return (

    <div className="App">
      {content}
    </div>
  );
}

export default App;
