import React, {useState} from 'react';
import './Base_expand.css';
import Ugyfelszerzo_Mobil from '../../../assets/Card/Ugyfelszerzo_Mobil-min.jpg';


const Base_expand = props =>{


  let changing_class = 'close_sidedrawer_ugy';

  if (props.boolean_open_sidedrawer) {
    changing_class = 'open_sidedrawer_ugy';
  }


    return(

<div className="Base_expand_egesz_ugy">

        <div className="Button_kontener_ugy">
        <button className="button_ugy" onClick= {props.click}>Részletek</button>
        </div>

        
        <div className={changing_class}>
          <p>
        Ennél jobb kinálatott nem fogsz találni a piacon!
        ( A fenti ár csak a 6 havi SEO -t tartalmazza.)                          
      Kétségtelen a legdrágább, de ugyanakor a legjobban megtérülő és leghasznosabb csomag egyben.
         
      A SEO egy külön teljesen külön szakma/téma. Tájékozodni a részletekről a 
      SEO aloldalon tud.
      Ez a weboldal típus proaktív. Nem csak paszívan várja hogy 
      valaki megtalálja hanem 

      A SEOzás egy folyamat nem egyikről a másik napra.
      </p>
        </div>

        <div className="Kep_start_ugy">
        <img src={Ugyfelszerzo_Mobil} alt='pipa'/>
        </div>

    </div>

     
      



    )
}
export default Base_expand;