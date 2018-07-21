import React, { Component } from 'react';
import {
    Menu,
    Icon,

}from 'antd';
import 'antd/dist/antd.css'
import MenuConfig from './../../config/menuConfig';//引入菜单
import './index.less'
const SubMenu=Menu.SubMenu;//获取子菜单





class NavLeft extends Component {
    componentWillMount(){
        const menuTree=this.menuLoadTest(MenuConfig);
        this.setState({menuTree});
    }

    menuLoadTest=(data)=>{//递归渲染菜单
      return  data.map((item)=>{
          if (item.children){
              return (
                  <SubMenu title={item.title} key={item.key}>
                      {this.menuLoadTest(item.children)}
                  </SubMenu>
              )
          }else {
              return (
                  <Menu.Item title={item.title} key={item.key}>
                      {item.title}
                  </Menu.Item>
              )
          }
      })
    };

    render() {
        return (
            <div>
                <div className="logo">
                    <img  src="/statics/k.svg" alt="1"/>
                    <h1>Y M K</h1>
                </div>

                <Menu mode="vertical" theme="dark">
                    {this.state.menuTree}
                </Menu>

            </div>
        );
    }
}

export default NavLeft;
