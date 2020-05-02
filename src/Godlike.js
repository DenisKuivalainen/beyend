import React from 'react'

import DayNight from './DayNight'

import './Godlike.css'
import './bootstrap.css'

class Godlike extends React.Component {

    date() {
        let today = new Date();
        return(Math.round(today.getHours()/6))
    }

    render() {
        return(
            <div class="g_top">
                <div class="row row_mrg">
                    <div class="col-2"></div>
                    <div class="col-3">
                        <DayNight>
                            <img class="g_img" src="https://funart.pro/uploads/posts/2020-01/1580130510_51-p-sialii-zhivotnie-113.jpg" alt="night" />
                            <img class="g_img" src="https://funart.pro/uploads/posts/2020-01/1580130510_51-p-sialii-zhivotnie-113.jpg" alt="morning" />
                            <img class="g_img" src="https://funart.pro/uploads/posts/2020-01/1580130510_51-p-sialii-zhivotnie-113.jpg" alt="day" />
                            <img class="g_img" src="https://funart.pro/uploads/posts/2020-01/1580130510_51-p-sialii-zhivotnie-113.jpg" alt="evening" />
                        </DayNight>
                    </div>
                    <div class="col-5">Three</div>
                    <div class="col-2"></div>
                </div>   
                <div class="row row_mrg">
                    <div class="col-2"></div>
                    <div class="col-5">Two</div>
                    <div class="col-3">Three</div>
                    <div class="col-2"></div>
                </div> 
                <div class="row row_mrg">
                    <div class="col-2"></div>
                    <div class="col-3">Two</div>
                    <div class="col-5">Three</div>
                    <div class="col-2"></div>
                </div>   
            </div>
        )
    }
}
export default Godlike