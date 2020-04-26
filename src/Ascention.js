import React from 'react';
import CustomSlider from './CustomSlider'
import './Ascention.css'

class Ascention extends React.Component {
    render() {
        return (
            <div class="bg layer1">
                <div class="slide">
                    <div class="div_logo">
                        <img class="a_logo" src="http://192.168.1.100:3000/ascention/logo.png" alt="BEYOND ASCENTION" />
                    </div>
                    <div>
                        <p class="a_intro">
                        Custom scrollbars are getting popular, and you might have come across websites that have unique scrollbars, making the sites feel and look different. There are basically a few ways to implement a custom scrollbar. In this tutorial we will be using CSS3, which is the most straightforward way. However, there are jQuery plugins that can help with customizing scrollbar, but I do not like to add more JavaScript to my website.
                        </p>
                        <p> d</p>
                        </div>
                    <CustomSlider />
                </div>
            </div>
        )
    }
 }
 
 export default Ascention;