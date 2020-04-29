import React, {useState} from 'react';
import Base_expand from './Base_expand/Base_expand';
import Base_szoveg from './Base_szoveg/Base_szoveg';
import Bem_csom_tul from './Bemutatkozo_tulajdonsagok/Bem_csom_tul';
import './Ceges_csomag.css';
const Ceges_csomag = props => {

    const [isToggledOn, setToggle] = useState(false);

    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log(isToggledOn)
      };    
      
      return (
         <div>
                <div className="akcio_ceg">
                <h1></h1>
                </div>

                <div className="Ceges_csomag_egesz">
                   <Base_szoveg></Base_szoveg>
                   <div className="Ceges_csomag_alja">
                      <Base_expand
                      click={toogleHandler}
                      boolean_open_sidedrawer={isToggledOn}
                      ></Base_expand>
                      <Bem_csom_tul></Bem_csom_tul>
                   </div>
                </div>

         </div>



      )

}
export default Ceges_csomag;