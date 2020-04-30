import React from 'react'

import CustomSlider from './CustomSlider'

import './Ascention.css'

class LogoStart extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            scroll: 0,
            xSize: 0,
            ySixe: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollY = window.pageYOffset || document.documentElement.scrollTop
        let checkScroll = scrollY > 0
        this.setState({
            scroll: checkScroll
          })
    }

    textHideOrReveal() {
        if(this.state.scroll){
            return("text_reveal")
        }
        else {
            return("text_hide")
        }
    }

    render(){
        return(
            <div>
                <div class="start_view">
                    <div class="div_logo">
                        <img class="a_logo" src="http://192.168.1.100:3000/ascention/logo.png" alt="BEYOND ASCENTION" />
                    </div>  
                    <div class={"div_intro " + this.textHideOrReveal()}>
                        <p class="a_intro">
                            Custom scrollbars are getting popular, and you might have come across websites that have unique scrollbars, making the sites feel and look different. There are basically a few ways to implement a custom scrollbar. In this tutorial we will be using CSS3, which is the most straightforward way. However, there are jQuery plugins that can help with customizing scrollbar, but I do not like to add more JavaScript to my website.
                        </p>
                    </div>
                </div>
                <div class={this.textHideOrReveal()}>
                    <CustomSlider />
                </div>
                <div class="custom_div"></div>
            </div>
        )
    }
}

export default LogoStart