import React from 'react'

import LogoStart from './LogoStart'

import './Ascention.css'

class Ascention extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            proportions: true, //horizontal - true, vertical - false
            fromTop: 0,
            fromTopClouds: 0,
            fromBottom: -10000,
            w: 0,
            vh: 0,
        }
        this.screenParam = this.screenParam.bind(this)
    }

    // componentWillMount() {
    //     this.screenParam();
    //     this.calculateParallax();
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

    screenParam = () =>{
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
        //calculating clouds excess
        let clouds = w - w*1552/1500
        //calculating layers parallax
        let y = vh-h+s
        this.setState({
            fromTop: x,
            fromTopClouds: clouds,
            fromBottom: y,
            s: s
        })
        console.log("w=" + w +" h=" + h +" vh=" + vh +" s=" + s)
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
        return (
            <div class="bg">
                <div class="layer1">
                    <div class="slide">
                        <LogoStart />
                    </div>
                </div>
                <div class="layer2">
                    <img class="l_img" style={this.bottomChecker(1)} src="http://192.168.1.100:3000/ascention/l1.png" alt="l1" />
                </div>
                <div class="layer3">
                    <img class="l_img" style={this.bottomChecker(0.8)} src="http://192.168.1.100:3000/ascention/l2.png" alt="l2" />
                </div>
                <div class="layer4">
                    <img class="bg_img" style={this.topChecker(0)} src="http://192.168.1.100:3000/ascention/bg.png" alt="bg" />
                </div>
                <div class="layer5">
                    <div class="bg_img" style={this.topChecker(this.state.fromTopClouds)}>
                        <div class="bg_move" />
                    </div>
                </div>
            </div>
        )
    }
 }
 
 export default Ascention;