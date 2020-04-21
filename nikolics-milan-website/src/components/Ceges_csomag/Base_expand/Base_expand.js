import React, {useState} from 'react';
import './Base_expand.css';
import Ceges_Mobil from '../../../assets/Card/Ceges_Mobil.png';


const Base_expand = props =>{


  let changing_class = 'close_sidedrawer_ceg';

  if (props.boolean_open_sidedrawer) {
    changing_class = 'open_sidedrawer_ceg';
  }


    return(

<div className="Base_expand_egesz_ceg">

        <div className="Button_kontener_ceg">
        <button className="button_ceg" onClick= {props.click}>Részletek</button>
        </div>

        
        <div className={changing_class}>
       
        Ha menő akar lenni. Ha nagyon profi akar lenni.
        Interaktív weboldal. Ha nem elégszel meg az
        alapszolgáltatással. És nem tud vagy lusta szöveget
        írni.
        Két irányú kommunikációt biztosít Ön és ügyfelei között.
                 Emelt szintű design elemeket és karbantartást tartalmaz valamint céges logót.
                Nem kell Önnek kitatlálni weboldala szövegezését sem.
        

        <ul className="felsorol_ceg">
          <li><span>Kétoldalú kommunikáció</span></li>
          <li><span>Több aloldal</span></li>
          <li><span>Több kép</span></li>
          <li><span>Üzenetküldő rendszer amit nagyon nehéz volt megcsinálni.</span></li>
          <li><span>Facebook chatbot!!!</span></li>
        </ul>                
              
        </div>

        <div className="Kep_start_ceg">
        <img src={Ceges_Mobil} alt='pipa'/>
        </div>

    </div>

     
      



    )
}
export default Base_expand;