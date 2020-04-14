import React, {useState} from 'react';
import './NM_NavBar.css';
import NM_Toolbar from '../NM_Toolbar/NM_Toolbar';
import NM_SideDrawer from '../NM_SideDrawer/NM_SideDrawer';
import NM_Backdrop from '../NM_Backdrop/NM_Backdrop';

const NM_NavBar = props => { 
   
    const [isToggledOn, setToggle] = useState(false);
  
    
    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log(isToggledOn)
      };    

                       return(
                    <div className="NM_NavBar_egesz">
                      <NM_Toolbar click={toogleHandler}></NM_Toolbar>
                      <NM_SideDrawer
                      open={isToggledOn}
                      click={toogleHandler}
                      ></NM_SideDrawer>                      
                    </div> 
                    )
                    }

export default NM_NavBar;