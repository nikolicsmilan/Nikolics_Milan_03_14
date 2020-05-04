import React, {useState} from 'react';
import './Base_szoveg.css';
import Text from 'react';



const Base_szoveg = props =>{

    return(

              
<div className="Base_szoveg_egesz_ugy">

        <div className="Csomag_cim_ugy">
                <h1>ÜGYFÉLSZERZŐ</h1>
                
        </div>
<div className="keret_ugy">
        <div className="Csomag_ar_ugy">
                <h1 className="Ered_ugy_ar">800 000 HUF</h1>
                <h1 className="Csok_ugy_ar">550 000 HUF</h1>
        </div>


        <div className='Csomag_leiras_ugy'>
          <div className='Szoveg_ugy'>
        Ez az a  weboldaltípus, ami a pénzt termeli. Megkeresi potenciális ügyfeleit
        és önhöz irányítja őket. Ha most velem végezteti weboldala keresőoptimalizását
         gyakorlatilag ingyen  megcsinálom céges kategóriájú weblapját!
         </div>
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