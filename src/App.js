import React, { Component } from 'react';
import './App.css';
// import { Button, Row, Col, Checkbox, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import Padre from './padre'
import Item from './item'
import Button from './buutton'


// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }


class App extends Component {

  // state = {
  //   current: 'mail',
  // }

  // handleClick = (e) => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });

  render() {
    return (
      <div className="App">

      <Padre/>


         {/* <div className="margin" >
           <p className="p1" >Design</p>
        </div> 
        <div className="gg">
        <Menu onClick={this.handleClick}mode="horizontal">
              <Menu.Item key="todos">
                <Icon type="circle" />Todos
              </Menu.Item>
              <Menu.Item key="notes">
                <Icon type="" />Notes
              </Menu.Item>
              <Menu.Item key="links">
                <Icon type="" /> Links
              </Menu.Item>
              <Menu.Item key="files">
                Files
              </Menu.Item>
        </Menu>
        </div>  
      <div className="checkbox" >
        <Checkbox onChange={onChange}>Project page</Checkbox>
        <br/>
        <br/>
        <Checkbox onChange={onChange}>Today page</Checkbox>
      </div>
      <div className="categories" >
        <div className="one" >
          <p className="p2" >Product Planning</p>
          <hr/>
          <br/>
          <Checkbox onChange={onChange}>Decide how to organize Today page</Checkbox>
          <br/>
          <br/>
          <Checkbox onChange={onChange}>Create wireframes for the Today page</Checkbox>
          <br/>
          <br/>
          <Checkbox onChange={onChange}>Decide whether to group items by type</Checkbox>
          <br/>
          <br/>
        </div>
        <div className="two" >
          <p className="p2" >Design</p>
          <hr/>
          <br/>
           <Checkbox className="checkboxHover"  onChange={onChange}>Project page</Checkbox>
          <br/>
          <br/>
          <Checkbox onChange={onChange}>Today page</Checkbox>
          <br/>
          <br/>
          <Checkbox onChange={onChange}>End of day page</Checkbox>
          <br/>
          <br/>
          <Checkbox onChange={onChange}>Notifications & Confirmations</Checkbox>
          <br/>
          <br/>
          <Checkbox onChange={onChange}>Modals</Checkbox>
          <br/>
          <br/>
        </div>
      </div> */}
      </div>

    );
  }
}

export default App;
