import React from 'react'

import LogoStart from './LogoStart'
import Parallax from './Parallax/Parallax'

import './Ascention.css'

class Ascention extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="bg">
                <div class="layer1">
                    <div class="slide">
                        <LogoStart 
                            imgSrc="http://localhost:3000/ascention/logo.png" 
                            imgAlt="Persecution Logo"
                        />
                    </div>
                </div>
                <Parallax>
                    <img class="layer" id="1"  src="http://localhost:3000/ascention/l1.png" alt="l1" />
                    <img class="layer" id="0.8"  src="http://localhost:3000/ascention/l2.png" alt="l2" />
                    <img class="background" id="0"  src="http://localhost:3000/ascention/bg.png" alt="bg" />
                    <img class="clouds" id={1552/1500}  src="http://localhost:3000/ascention/clouds_full.png" alt="clouds" />
                </Parallax>
            </div>
        )
    }
}
 
 export default Ascention;