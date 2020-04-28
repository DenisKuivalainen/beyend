import React from 'react'

import LogoStart from './LogoStart'

import './Ascention.css'

class Ascention extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            proportions: true, //horizontal - true, vertical - false
            fromTop: 0
        }
    }

    componentDidMount() {
        window.addEventListener('load', this.updateSize);
        window.addEventListener('resize', this.updateSize);
        window.addEventListener('load', this.calculateParallax);
        window.addEventListener('scroll', this.calculateParallax);
    }
    
    componentWillUnmount() {
        window.removeEventListener('load', this.updateSize);
        window.removeEventListener('resize', this.updateSize);
        window.removeEventListener('load', this.calculateParallax);
        window.removeEventListener('scroll', this.calculateParallax);
    }

    updateSize = () =>{
        let xxx =  document.documentElement.clientWidth
        let yyy = document.documentElement.clientHeight
        let prop = xxx>yyy
        this.setState({
            proportions: prop,
          })
    }

    calculateParallax = () =>{
        let s = window.pageYOffset || document.documentElement.scrollTop
        let h = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        )
        let w = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        )
        let x = s-(w/h)
        if(x < 1 || !this.state.proportions) {x = 0}
        this.setState({
            fromTop: x,
        })
    }

    XorY() {
        if(this.state.proportions) {return("xy")}
        else{ return("yx")}
    }

    render() {
        return (
            <div class="bg">
                <div class="layer1">
                    <div class="slide">
                        <LogoStart />
                    </div>
                </div>
                <div class="layer4">
                    <img class={"bg_img " + this.XorY()} src="http://192.168.1.100:3000/ascention/bg.png" alt="bg" />
                </div>
            </div>
        )
    }
 }
 
 export default Ascention;