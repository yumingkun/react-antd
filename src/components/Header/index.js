import React, { Component } from 'react';
import {
    Row,
    Col,

}from 'antd';
import './index.less';


class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'🌧',
            time1:" ",//日期
            time2:" ",//时间
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
        },1000)
    }
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
                        <span className="weather-detail">多云转晴</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
