import React from 'react'

import './Ascention.css'

class Parallax extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            picArr:[],
            picOrder:[],
            proportions: true, //horizontal - true, vertical - false
            fromTop: 0,
            fromBottom: -10000,
            w: 0,
            vh: 0,
        }
        this.screenParam=this.screenParam.bind(this)
    }
    
    genetarePics() {
        let picts = React.Children.toArray(this.props.children)
        var order =[]
        for(let i = 0 ; i<(picts.length); i++) {
           if(picts[(i)].props.class === "layer") {order.push("0")}
           if(picts[(i)].props.class === "background") {order.push("1")}
           if(picts[(i)].props.class === "clouds") {order.push("2")}
        }
        this.setState({
            picArr: picts,
            picOrder: order
        })  
    }

    classSet(order) {
        if (order === '0'){return("l_img")} //картинки внизу
        if (order === '1'){return('bg_img')} //фон
        if (order === '2'){return('bg_img')} //Облака
    }

    styleSet(oId, index) {
        let z = 50 - index
        let x = parseFloat(this.state.picArr[index].props.id)
        if(oId==="0"){return(this.bottomChecker(x, z))}
        if(oId==="1"){return(this.topChecker(x, z))}


        // return({zIndex: {z}})
    }

    componentWillMount() {
        this.genetarePics()
        this.screenParam()
    }    

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

    topChecker(excess, z) {
        let ex = excess + this.state.fromTop
        if(this.state.proportions){ return({top: ex, zIndex: z})}
        else { return({bottom: 0, zIndex: z})}
    }

    bottomChecker(excess, z) {
        let ex = this.state.fromBottom / excess
        return({bottom: ex, zIndex: z})
    }

    render() {
        return(
            <div class="layer">
                {
                    this.state.picOrder.map((oId, index)=> 
                        <img 
                            class={this.classSet(oId)} 
                            style={this.styleSet(oId, index)}
                            id={oId}
                            key={index}
                            src={this.state.picArr[index].props.src}
                            alt={this.state.picArr[index].props.alt}
                        />
                    )
                }
            </div>
        )
    }
}

export default Parallax