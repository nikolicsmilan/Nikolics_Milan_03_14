import React, {useState} from 'react';
import './Base_szoveg.css';



const Base_szoveg = props =>{

    return(

<div className="Base_szoveg_egesz_ceg">

        <div className="Csomag_cim_ceg">
              <h1>CÉGES</h1>
             
        </div>

        <div className="Csomag_ar_ceg">
              <h1>250 000 HUF</h1>
        </div>


        <div className='Csomag_leiras_ceg'>
                <div className='szoveg'>          
                Mindent tud, amit a Bemutatkozó weboldal.
                 Haladó szintű weboldal igényes vállalkozások számára lett kifejlesztve.
                 Ha nem akar kompromiszumokat válasza ezt a típust.
                
                
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