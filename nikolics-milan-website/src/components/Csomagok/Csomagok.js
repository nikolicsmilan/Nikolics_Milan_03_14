import React, {useState} from 'react';
import Bemutatkozo_csomag from '../Bemutatkozo_csomag/Bemutatkozo_csomag';
import Ceges_csomag from '../Ceges_csomag/Ceges_csomag';
import Ugyfelszerzo_csomag from '../Ugyfelszerzo_csomag/Ugyfelszerzo_csomag';
import './Csomagok.css';

const Csomagok = props => {

    const [isToggledOn, setToggle] = useState(false);

    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log(isToggledOn)
      };    
      
      return (
                <div className="Csomagok_egesz">
                      <a id="bemutatkozo"></a>
                    <div className="Csomag_doboz">
                    <Bemutatkozo_csomag></Bemutatkozo_csomag>
                    </div>
                    <a id="ceges"></a>
                    <div  className="Csomag_doboz">
                    <Ceges_csomag></Ceges_csomag>
                    </div>
                    <a id="ugyfelszerzo"></a>
                    <div className="Csomag_doboz"> 
                    <Ugyfelszerzo_csomag></Ugyfelszerzo_csomag>
                    </div>
                </div>



      )

}
export default Csomagok;