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
                felirat='Egyedi tervezés'
                felugro='Nem sablonból készül így weboldala igazán kiemelkedik a 
                többi közül. Weboldala az ön igényeidhez van szabva.
                A sablonból készült weboldalaknak több ezer klónja is lehet
                amit így egy lehetséges vásárló bóvlinak mínősíthet.
                Nehézkes a SEO, a karbantartás, és lassú lehet.'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
            <Bem_csom_tul_sor
                  kep={pipa2}
                felirat='Mobilbarát'
                felugro='Weboldala mínőségi módon jelenik meg több fajta eszközön is
                Az internetet használók fele nem asztali számítógépet hanem
                 mobiltelefont vagy más okoseszközt használ. Ha nem akar elesni kliensei 
                 felétől szüksége van erre az opcióra.'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
            <Bem_csom_tul_sor
                kep={pipa2}
                felirat='SSD tárhely'
                felugro='Modernebb és drágább mint a hagyományos tárhelyek. Az eredmény megnövekedett
                betöltődési sebbeség ami kulcsfontosságú tényező a vásárlók szempontjából. Ha
                weboldala nem tőltödik be néhány másodperc alatt a legtöbben elkattintanak...'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Biztonság'
                felugro='Weboldalát  SSL tanusítvány védi.
                Így a  weboldalán megadott adatok nem láthatók mindenki számára 
                aki az internetet használja. Ez alapkövetelmény ma már egy weboldaltól.
                Az SSL nélküli weboldalakat a chrome weböngésző 
                nem biztonságosnak minősíti. Nem érdemes ilyen weboldalakkal foglalkozni,
                 adatokat megadni pedig főleg nem. (pedig a weboldalak fele még ilyen)'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
            <Bem_csom_tul_sor
                kep={pipa2}
                felirat='GDPR cookie kezelés'
                felugro='Nem sablon. Mindegyik egyedi
                tervezés alapján készül'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Adatvédelmi tájékoztató'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
              <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Webgyorsítás'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
               <Bem_csom_tul_sor
                kep={pipa2}
                felirat='1 Gbps internetkapcsolat'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
            <Bem_csom_tul_sor
                  kep={pipa2}
                felirat='Max 5 aloldal'
                felugro='Nem sablon. Mindegyik egyedi
                tervezés alapján készül'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={pipa2}
                felirat='Max 5 kép  (profi)'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={pipa2}
                felirat='1 Hónap Ingyenes Karbantartás'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={xa}
                felirat='Emelt szintű design'
                felugro='Igény szerinti plusz grafikai elemek.
                 3(Mobil, Tablet, Desktop)-nál több Nézetre való optimalizálás'
                 appear='Bem_appear'  
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={xa}
                felirat='Céges logó'
                felugro='Igény szerinti plusz grafikai elemek.
                3(Mobil, Tablet, Desktop)-nál több Nézetre való optimalizálás'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={xa}
                felirat='Szövegírás (nem SEO)'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={xa}
                felirat='Üzenet küldő rendszer'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
              <Bem_csom_tul_sor
                kep={xa}
                felirat='Közöségi Média Kapcsolat'
                felugro='Chatbot: Azon vevők számára akik rendelkeznek facebook fiókkal
                és be is vannak jelentkezve közvetlen elérést biztosít Facebook oldala Messenger feületére. Így ön
                azzonal értesülni tud a felmerülő igényekről
                Comment:Weboldala commentelhetővé és likeolhatóvá vállik facebook felhasználók számára'
                appear='Bem_appear'  
            ></Bem_csom_tul_sor>
             <Bem_csom_tul_sor
                kep={xa}
                felirat='(SEO) 6 hónap'
                felugro='Ez az úgynevezet kezdőoldal'
                appear='Bem_appear'  
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