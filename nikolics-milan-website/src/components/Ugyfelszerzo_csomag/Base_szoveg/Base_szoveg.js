import React, {useState} from 'react';
import './Base_szoveg.css';
import Text from 'react';



const Base_szoveg = props =>{

    return(
        
<div className="Base_szoveg_egesz_ugy">

        <div className="Csomag_cim_ugy">
                <h1>ÜGYFÉLSZERZŐ</h1>
                
        </div>

        <div className="Csomag_ar_ugy">
                <h1 className="Akcio_ugy"> EXTRÉM AKCIÓ!</h1>
                <h1 className="Ered_ugy_ar">800 000 HUF</h1>
                <h1 className="Csok_ugy_ar">550 000 HUF</h1>
        </div>


        <div className='Csomag_leiras_ugy'>
           <div className='szoveg'>
        Ez az a  Weboldaltípus, ami a pénzt termeli. Megkeresi potenciális ügyfeleit
        és Önhöz irányítja őket.<span className="Kiemelt_ugy"> Ha most</span> velem végezteti weboldala keresőoptimalizását
         <span className="Kiemelt_ugy"> ingyen </span> megcsinálom CÉGES kategóriájú weblapját!
         </div>
         

        </div>

    {/*
        <div className="Csomag_ar">
             
        </div>


        <div className='Csomag_leiras'>
       
        </div>

        <div>
        <img src={Bemutatkozo_Mobil} alt='pipa'/>
        </div>
*/}  
         
    </div>

   
      



    )
}
export default Base_szoveg;