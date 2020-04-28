import React from 'react'

import LogoStart from './LogoStart'

import './Ascention.css'

class Ascention extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            proportions: true, //horizontal - true, vertical - false
            fromTop: 0,
            text: ""
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
        window.removeEventListener('resize', this.calculateParallax);
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
        let w = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        )
        let h = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        )
        let vh = document.documentElement.clientHeight
        // let x = (s*(h-w))/vh
        let x = -(s*(h-w))/(h-vh)
        if(s < 1 || !this.state.proportions) {x = 0}

        let txt = "w " + w + "; h " +h+ "; top " +x
        this.setState({
            fromTop: x,
            text: txt
        })
        console.log(x + " " + h + " " + vh )
    }

    XorY() {
        if(this.state.proportions) {return("xy")}
        else{ return("yx")}
    }

    topChecker() {
        if(this.state.proportions){ return({top: this.state.fromTop})}
    }

    render() {
        const TOP = {top: this.state.fromTop}
        return (
            <div class="bg">
                <div class="layer1">
                    <div class="slide">
                        <LogoStart textt={this.state.text} />
                    </div>
                </div>
                <div class="layer4">
                    <img id={this.state.text}
                     class={"bg_img " + this.XorY()} style={TOP} src="http://192.168.1.100:3000/ascention/bg.png" alt="bg" />
                </div>
            </div>
        )
    }
 }
 
 export default Ascention;