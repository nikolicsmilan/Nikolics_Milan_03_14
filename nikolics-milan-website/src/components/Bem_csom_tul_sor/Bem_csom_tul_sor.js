import React, {useState} from 'react';
import './Bem_csom_tul_sor.css';
import info_button from '../../assets/Card/info-gomb.svg';
import pipa2 from '../../assets/Card/pipa2.svg';
import xa from '../../assets/Card/xa.svg';

const Bem_csom_tul_sor = props => {

  const [toogleState, setToogleState] = useState({
    toogles: [
       { number1: false}           
    ]
});   

var changing_css_class;
if (toogleState.toogles[0].number1) {
  changing_css_class = props.appear;
} else {
  changing_css_class = "hidden";
}  

/*First Handlers*/
const toogleHandler_in = () =>{
  console.log('Be');
  console.log(toogleState.toogles[0].number1);
setToogleState ({
    toogles: [
        { number1: true},           
 ] 
}); 
};

const toogleHandler_out = () =>{
  console.log('Ki');
  console.log(toogleState.toogles[0].number1);   
setToogleState ({
    toogles: [
        { number1: false},  
                     
 ] 
}); 
};
      
      return (
          
            <div className="Bem_csom_tul_sor_egesz">   

                  <div className={changing_css_class}>
                     <p>{props.felugro}</p>        
                  </div>             
                                      
                  <div className="Mindig-lathato">

                   <div className="info_kontener"  >                            
                       <img className="info_gomb"
                       onMouseLeave={toogleHandler_out} onMouseEnter={toogleHandler_in}
                       src={info_button} alt='I button image'/>
                        <div className="felirat">{props.felirat}</div>  
                   </div>                            
                      
                    <div className="pipa">
                         <img src={props.kep} alt='pipa'/>
                    </div>      
                  </div>              
            </div>      




      )

}
export default Bem_csom_tul_sor;