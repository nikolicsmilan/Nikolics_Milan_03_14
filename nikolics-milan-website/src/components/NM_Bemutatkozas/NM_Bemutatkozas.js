import React from 'react';
import './NM_Bemutatkozas.css';
import EU_logo_2 from '../../assets/EU_logo_2.JPG';
import NM_kep_2 from '../../assets/NM_kep_2.PNG';
import NM_kep_Mobil from '../../assets/NM_kep_Mobil_2.JPG';
import NM_kep_Desktop from '../../assets/NM_kep_Desktop.jpg';
import nikolics_logo from './../../assets/nikolicsmilan_logo_9.png';

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
                    <li className="BemSzovLi_1">Szeretné megnövelni vállalkozása bevételét?</li>
                    <li  className="BemSzovLi_1">Új vagy jobban fizető ügyfelekre van szüksége?</li>
                    <li  className="BemSzovLi_1">Népszerűvé szeretné tenni vállalkozását?</li>
                   
                    </div>

                    <div className="Bold_kontener">
                        <li className="NM_Bemutat_szoveg_bold" >Akkor jó helyen jár!</li>
                    </div>
                    
                    <div className="Osztonzo_szoveg">
                    
                   <li >Csak válasza ki melyik csomag illik leginkább az elképzeléseihez!</li> 
                    </div>
                   
                </ul>

        
                
        

            </div>
{/*
            <div className="NM_kep_2">
                <img  src={NM_kep_Mobil} ></img>  
            </div>
            <div className="Bemutat_szoveg_keret">
                <ul className="Bemutat_szoveg_keret_ul">
                    <li>Nikolics Milán</li>
                    <li >Web fejlesztő</li>
                    <li >Tel: 06-20-475-24-60</li>
                    <li >Email: nikolicsmilan@gmail.com</li>
                </ul>       
            </div>
   */}
    </div>



</div>

</div>
   

  

);


export default NM_Bemutatkozas;