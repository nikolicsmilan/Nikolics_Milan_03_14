import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-g-analytics';
import Route from 'react-router-dom/Route';
import { HashLink as Link } from 'react-router-hash-link';
import NM_NavBar from '../NM_NavBar/NM_NavBar';
import NM_Bemutatkozas from '../NM_Bemutatkozas/NM_Bemutatkozas'
import Bemutatkozo_csomag from '../Bemutatkozo_csomag/Bemutatkozo_csomag';
import MyForm from '../form/MyForm';

import Nmchat from '../NM_chat/Nmchat';
import Csomagok from '../Csomagok/Csomagok';
/*const AsyncNmchat = asyncComponent(() => {
  return import('./../NM_chat/Nmchat');
});*/
/*import MetaTags from 'react-meta-tags';*/

class App extends Component {
  
    

    render() {
        return (
          <div className="App_egesz">      
          <BrowserRouter id="UA-158844454-1">
          <div className="App_navbar">
              <Route path="/" component={NM_NavBar}/>
          </div>
          <div className="App_egesz-body">
              <Route exact path="/" component={NM_Bemutatkozas}/>
              <Route exact path="/" component={Csomagok}/> 
              <Route exact path="/" component={MyForm}/>
              <Route path="/SEO" component={NM_Bemutatkozas}/>
         </div>  
        
            </BrowserRouter>
            </div>
            );
    }
}

export default App;