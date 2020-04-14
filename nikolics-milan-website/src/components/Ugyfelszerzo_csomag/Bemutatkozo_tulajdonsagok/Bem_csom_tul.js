import React, {useState} from 'react';
import './Bem_csom_tul.css';
import Bem_csom_tul_sor from '../../Bem_csom_tul_sor/Bem_csom_tul_sor';
import pipa2 from '../../../assets/Card/pipa2.svg';
import xa from '../../../assets/Card/xa.svg';
import { HashLink as Link } from 'react-router-hash-link';

const Bem_csom_tul = props => {


    

    return (
        <div className="Bem_csom_tul_egesz">
            <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Landing Page'
                felugro='Másnéven érkező oldlal.'   
                appear='Ugy_appear'            
            ></Bem_csom_tul_sor>
            <Bem_csom_tul_sor
                kep={pipa2}
                felirat='UIX Design'
                felugro='Nem sablon. Mindegyik egyedi
                tervezés alapján készül '
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
              <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Domai név + Fix IP cím'
                felugro='Nem sablon. Mindegyik egyedi
                tervezés alapján készül '
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                  kep={pipa2}
                felirat='Mobilbarát'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
            <Bem_csom_tul_sor
                kep={pipa2}
                felirat='SSD Tárhely'
                felugro='Nem sablon. Mindegyik egyedi
                tervezés alapján készül '
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={pipa2}
                felirat='SSL Tanusítvány'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
            <Bem_csom_tul_sor
                kep={pipa2}
                felirat='GDPR Cookie Kezelés'
                felugro='Nem sablon. Mindegyik egyedi
                tervezés alapján készül '
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Adatvédelmi Tájékoztató'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
              <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Webgyorsítás'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
               <Bem_csom_tul_sor
                kep={pipa2}
                felirat='1 Gbps Internetkapcsolat'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
            <Bem_csom_tul_sor
                  kep={pipa2}
                felirat='Max 10 Aloldal'
                felugro='Nem sablon. Mindegyik egyedi
                tervezés alapján készül '
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Max 10 Kép  (profi általam keresett)'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
               <Bem_csom_tul_sor
                kep={pipa2}
                felirat='6 Hónap Ingyenes Karbantartás '
                felugro='Igény szerinti plusz grafikai elemek. 3(Mobil, Tablet, Desktop)-nál több Nézetre való optimalizálás'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
              <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Emelt szintű Design'
                felugro='Igény szerinti plusz grafikai elemek. 3(Mobil, Tablet, Desktop)-nál több Nézetre való optimalizálás'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
              <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Céges Logó'
                felugro='Igény szerinti plusz grafikai elemek. 3(Mobil, Tablet, Desktop)-nál több Nézetre való optimalizálás'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Szövegírás (nem SEO)'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>          
             <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Üzenet Küldő Rendszer'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
              <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Közöségi Média Kapcsolat'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Keresőoptimalizálás(SEO) 6 hónap'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Ugy_appear' 
            ></Bem_csom_tul_sor>
           <div className="Megrendelem_gomb">
            <Link to={{         
                 pathname: "/Kapcsolat",      
                 hash: "#form-1",
                }}> <h1>Megrendelem!</h1></Link>               
            </div>

        </div>

    )
}

export default Bem_csom_tul;