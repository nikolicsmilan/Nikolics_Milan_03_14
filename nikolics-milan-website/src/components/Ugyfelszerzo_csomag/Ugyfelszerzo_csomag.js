import React, {useState} from 'react';
import Base_szoveg from './Base_szoveg/Base_szoveg';
import Base_expand from './Base_expand/Base_expand';
import Bem_csom_tul from './Bemutatkozo_tulajdonsagok/Bem_csom_tul';
import './Ugyfelszerzo_csomag.css';

const Ugyfelszerzo_csomag = props => {

    const [isToggledOn, setToggle] = useState(false);

    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log(isToggledOn)
      };    
      
      return (
                <div className="Ugyfelszerzo_csomag_egesz">
                   <Base_szoveg></Base_szoveg>
                   <div className="Ugyfelszerzo_csomag_alja">
                      <Base_expand
                      click={toogleHandler}
                      boolean_open_sidedrawer={isToggledOn}
                      ></Base_expand>
                      <Bem_csom_tul></Bem_csom_tul>
                   </div>
                </div>



      )

}
export default Ugyfelszerzo_csomag;