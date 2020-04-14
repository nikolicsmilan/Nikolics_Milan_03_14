import React, {useState} from 'react';
import './Base_szoveg.css';



const Base_szoveg = props =>{

    return(

<div className="Base_szoveg_egesz_bem">

        <div className="Csomag_cim_bem">
              <h1>BEMUTATKOZÓ</h1>
            
        </div>

        <div className="Csomag_ar_bem">
              <h1>120 000 HUF</h1>
        </div>


        <div className='Csomag_leiras_bem'>

            <p>
            Ez a Professzionális Weboldal ideális arra, 
            hogy bemutassa vállakozását ügyfelei számára megnyerő módon. 
            Alapkövetelmény egy sikeres és modern vállalkozás számára.                   
            Gyors. Biztonságos. Jogtiszta.
           
            </p> 
                
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