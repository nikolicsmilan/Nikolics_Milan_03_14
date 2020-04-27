import React from 'react';
import './NM_Bemutatkozas.css';
import EU_logo_2 from '../../assets/EU_logo_2.JPG';
import NM_kep_2 from '../../assets/NM_kep_2.PNG';
import NM_kep_Mobil from '../../assets/NM_kep_Mobil_2.JPG';
import NM_kep_Desktop from '../../assets/NM_kep_Desktop.jpg';
import nikolics_logo from './../../assets/nikolicsmilan_logo_9.png';
import bevetel from './../../assets/SzovegKep/Bevetel2.PNG';
import nepszeru from './../../assets/SzovegKep/Nepszeru2.PNG';
import ugyfel from './../../assets/SzovegKep/Ugyfel2.PNG';

const NM_Bemutatkozas = props => (


<div className="Bemutat_egesz">
    <div className="kozepre">
    
    {/*Zöld*/}
    <div className="Szoveg_focim_kontener">
 {/*Sárga*/}
        <div className="Szoveg_url_kontener">
               
                    <img className="Nikolics_logo" src={nikolics_logo} ></img>  
               
        </div>

      

  </div>

    <div className="Szoveg-Kep_kontener">             

             <div className="Bemutat_szoveg_keret">
                <ul className="Bemutat_szoveg_keret_ul">

                    <div className="Li_kontener">
                    <li className="BemSzovLi_1"> <img src={bevetel} ></img> </li>
                    <li  className="BemSzovLi_1"> <img src={nepszeru} ></img></li>
                    <li  className="BemSzovLi_1"> <img src={ugyfel} ></img></li>
                   
                    </div>

                    <div className="Bold_kontener">
                        <li className="NM_Bemutat_szoveg_bold" >Akkor jó helyen jár!</li>
                    </div>
                    
                    <div className="Osztonzo_szoveg">                    
                        <li >Csak válasza ki melyik csomag illik leginkább az elképzeléseihez!</li> 
                    </div>
                   
                </ul>

        
                
        

            </div>

    </div>



</div>

</div>
   

  

);


export default NM_Bemutatkozas;