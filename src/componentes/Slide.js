import React from 'react'
import { Slide } from 'react-slideshow-image'
import SlideCont from './SlideCont'

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true, 
    arrows: false,
    


}

const Slideshow = () =>{
    return(
        <div className="containSilde background-item-nine">
                <Slide {...proprietes}>
                    <div className="each-slide">
                        <div>
                            <SlideCont/>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <SlideCont/>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <SlideCont/>
                        </div>
                    </div>
                </Slide>
        </div>
    );
}

export default Slideshow;