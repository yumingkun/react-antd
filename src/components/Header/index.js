import React, { Component } from 'react';
import {
    Row,
    Col,

}from 'antd';
import './index.less';
import axios from '../../axios'

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'🌧',
            time1:" ",//日期
            time2:" ",//时间
            dayPictureUrl:"",
            weather:''
        }
    }
    componentWillMount(){
        setInterval(()=>{
            let time1=new Date().toLocaleDateString();
            let time2=new Date().toLocaleTimeString();
            this.setState({
                time1:time1,
                time2:time2,
            })
        },1000),
        this.getWeatherAPIData();
    }
    getWeatherAPIData=()=>{
        let city = '开封';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    };
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎：{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>

                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.time1}-{this.state.time2}</span>
                        <span className="weather-img">
                             <img src={this.state.dayPictureUrl}/>
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
