  
import React from 'react';
import logo from './media/ascention.png';
import './game1.css';
import l1 from './media/bg/l1.png'
import l2 from './media/bg/l2.png'
import bg from './media/bg/bg.png'
import CustomSlider from './CustomSlider'

class Game1 extends React.Component {
    render() {
        return (
            <div class="game1">
                {/* <img src={logo} alt="Logo" class="pict"/> */}
                <div class="layer1 slide">
                    <CustomSlider />
                </div>
                {/* <div class="layer4 bg">
                    <img src={l1} alt="layer1"/>
                </div>
                <div class="layer7 bg">
                    <img src={l2} alt="layer2"/>
                </div>
                <div class="layer10 bg">
                    <img src={bg} alt="background"/>
                </div> */}
            </div>
            
        )
    }
 }
 
 export default Game1;