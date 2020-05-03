import React from 'react'

import LogoStart from './LogoStart'
import Parallax from './Parallax'

import './Ascention.css'

class Persecution extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            proportions: true, //horizontal - true, vertical - false
            fromTop: 0,
            fromBottom: -10000,
            w: 0,
            vh: 0,
        }
        this.screenParam=this.screenParam.bind(this)
    }

    // componentWillMount() {
    //     this.screenParam()
    // }

    componentDidMount() {
        window.addEventListener('resize', this.screenParam);
        window.addEventListener('load', this.screenParam);
        window.addEventListener('resize', this.calculateParallax);
        window.addEventListener('load', this.calculateParallax);
        window.addEventListener('scroll', this.calculateParallax);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.screenParam);
        window.removeEventListener('load', this.screenParam);
        window.removeEventListener('resize', this.calculateParallax);
        window.removeEventListener('load', this.calculateParallax);
        window.removeEventListener('scroll', this.calculateParallax);
    }

    screenParam(){
        //to check proportions
        let xxx =  document.documentElement.clientWidth
        let yyy = document.documentElement.clientHeight
        let prop = xxx>yyy
        //to set parallax param
        let w = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        )
        let vh = document.documentElement.clientHeight
        this.setState({
            proportions: prop,
            w: w,
            vh: vh
        })
    }

    calculateParallax = () =>{
        if(this.state.w === 0) {this.screenParam()}
        //to set scroll value
        let s = window.pageYOffset || document.documentElement.scrollTop
        //to get parallax param
        let w = this.state.w
        let h = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        )
        let vh = this.state.vh
        //vh - window height, h - document height
        //w - document width, equals to window height. As bg.png is square shape, its height equals w
        //Xmax = h - hv
        //Smax = w - hv
        let x = (s*(vh-w))/(h-vh)
        if(s < 1 || !this.state.proportions) {x = 0}
        //calculating layers parallax
        let y = vh-h+s
        this.setState({
            fromTop: x,
            fromBottom: y,
        })
    }

    topChecker(excess) {
        let ex = excess + this.state.fromTop
        if(this.state.proportions){ return({top: ex})}
        else { return({bottom: 0})}
    }

    bottomChecker(excess) {
        let ex = this.state.fromBottom / excess
        return({bottom: ex})
    }

    render() {
        //if(this.state.w === 0) {this.screenParam(); this.calculateParallax()}
        
        return (
            <div class="bg">
                <div class="layer1">
                    <div class="slide">
                        <LogoStart />
                    </div>
                </div>
                <Parallax>
                    <img class="layer" id="1"  src="http://192.168.1.100:3000/ascention/l1.png" alt="l1" />
                    <img class="layer" id="0.8"  src="http://192.168.1.100:3000/ascention/l2.png" alt="l1" />
                    <img class="background" id="0"  src="http://192.168.1.100:3000/ascention/bg.png" alt="l1" />
                </Parallax>
            </div>
        )
    }
}

export default Persecution