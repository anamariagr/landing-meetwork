import React from 'react';

const SectionOne = props =>{

        return(
            
                   <div className="container">
                         <div className="row">
                            <div className="col-md-5">
                                <div className="row letter-color">
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
                                            Con nosotros siempre vas a tener un espacio de trabajo ( Hotdesk free ) disponible en el bar, café o restaurante más cercano a tu ubicación, descarga nuestra app y empieza a generar tus reservas. 
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                            <p>
                                            Puedes navegar por nuestra red de espacios, conocer la calificación que le ha asignado nuestra comunidad, elegir entre un hotdesk o una sala de reuniones, seleccionar la fecha y la hora de tu reserva agrega a tus invitados tus invitados y nosotros nos encargamos del resto.
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                        <button type="button" class="btn btn-download shadow   bg-white ">descarga</button>
                                        </div>
                                        <div className="col-md-12 p-3 mt-3">
                                            <div className="row row ml-lg-5">
                                                    <div className="col-5 col-lg-3 ml-lg-5 pr-1">
                                                      <a href="https://apps.apple.com/ar/app/meetwork-app/id1462502158" ><img alt="icon-1" className="btn-app" src="./img/Logo_appstore.png"/> </a>  
                                                   </div>  
                                                    <div className="col pl-1"> 
                                                        <img alt="logo-3"  className="btn-store"  src="./img/logo-android.png"/>
                                                    </div>
                                            </div>
                                        </div>
                                       
                                </div>
                            </div>
                    </div>

                    
                   </div>

                    
                  
                 )

}

export default SectionOne;

