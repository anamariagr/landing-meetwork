import React from 'react';
import Cards from './Cards';

const SectionFive = props =>{
        return(
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 mt-lg-5 pt-lg-5">
                         <Cards/>
                    </div>
                   <div className="col-md-6  mt-lg-5 pt-lg-5 pl-lg-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row letter-color pt-0">
                                 <div className="col-md-12">
                                            <span className="title-color">Descarga nuestra app</span>
                                        </div>
                                        <div className="col-md-12 pb-2">
                                            <p className="subtitle">
                                            Coworking itinerantes en bares, cafés y restaurantes
                                            </p>
                                            <div className="line ">
                                                
                                        </div>
                                        </div>
                                        
                                      
                                        <div className="col-md-12">
                                        <p>
                                            Los emprendedores necesitan herramientas que se ajusten a sus ritmos acelerados de trabajo y más si cuando están pasando por un proceso de incubación o aceleración, nuestra plataforma registra toda la información del proyecto emprendedor y se va actualizando constantemente durante la evolución que se va teniendo en el tiempo.
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                                <img here=" # " alt=" " className="img-zise" src="./img/section_6.png"/> 
                                        </div>
                                       
                                        <div className="col-md-12 pt-5 text-center ">
                                            <button type="button"  className="btn btn-download shadow   bg-white"> <a href="https://meetwork.space" > Activar mi establecimiento</a></button>
                                         </div>
                                    
                                    
                                  
                                   
                            </div>
                        </div>
                </div>
                </div>


                </div>
                </div>
      
        )

}

export default SectionFive;
