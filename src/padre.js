import React, { Component } from 'react';
import Item from './item';
import Buutton from './buutton';
import _ from 'lodash';
import './App.css';
 import { Button, Row, Col, Checkbox, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
 

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


class App extends Component {
 
    state = {
    current: 'mail',
  }

  // handleClick = (e) => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });


  constructor(props){
    super(props);
    this.state = {
      data : [
        {
          name  : "Progect page",
        }
      ]
    }
  }
 
  _remove(position){
    let { data } = this.state;
 
    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]
 
    this.setState({ data : newData });
 
  }
 
  _add(){
    let { data } = this.state;
    let newData = [
      ...data,
      {
        name  : "Today page" 
      }
    ]
    this.setState({ data : newData });
  }
 

 
  render() {
    return (
      <div className="app">



       <div className="margin" >
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
           {/* <Checkbox className="checkboxHover"  onChange={onChange}>Project page</Checkbox>
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
          <br/> */}
          <br/>
          
          {this.state.data.map(
            (item,index) =>
              <Item data={item} key={index} onRemove={ () => this._remove(index)} />
            )
          }
        
        <div className="footer">
          <Button  type="dashed"
            onClick={this._add.bind(this)}
            name="Add item"><Icon type="plus-circle" theme="twoTone" />Add Item</Button>
          
        </div>
        </div>
        
      </div> 


      </div>
    );
  }
}
 
export default App;