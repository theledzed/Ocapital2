import React, { Component } from 'react';
import Item from './item';
import './App.css';
 import { Button,  Checkbox, Menu, Icon,Row,Col } from 'antd';
import 'antd/dist/antd.css';
import {Badge} from 'react-bootstrap' 



function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


class App extends Component {
 
    state = {
    current: 'mail',
  }

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
    let  tareas  = ["Today page", "End of day page", "Notifications & Confirmations", "Modals", "Bother my brother"] 
    let numeroTareas = tareas.length;
    let numero=Math.floor(Math.random()* numeroTareas) 
    
    let newData = [

      ...data,
      {
        name  : tareas[numero]
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
                <Icon type="circle" />
                <Badge  style={{ backgroundColor:'#E0E6F8', color:'#2E9AFE'  }} > 11</Badge>
                {"\n"}
                Todos   
              </Menu.Item>
              <Menu.Item key="notes">
                <Icon type="" />
                <Badge  style={{ backgroundColor:'#E0E6F8', color:'#2E9AFE'  }} > 3</Badge>
                {"\n"}
                Notes
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
          <Row>
            <Col span={9} ><p className="p2" >Product Planning</p></Col>
            <Col span={1}  offset={14}><Icon type="ellipsis" style={{ fontSize: 35, color: 'grey' }}  /></Col>
          </Row>
          <hr/>
          <br/>
          {/* <Button  size="small" style={{ border:'0px' }} > <Icon type="star"  style={{color:'orange'}} /> </Button> */}
          {"\n"}
          <Checkbox onChange={onChange}>Decide how to organize Today page {"\n"}  <Badge > 2h</Badge> {"\n"} <Badge>Work</Badge>  </Checkbox>
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
        <Row>
            <Col span={9} ><p className="p2" >Design</p></Col>
            <Col span={1}  offset={14}><Icon type="ellipsis" style={{ fontSize: 35, color: 'grey' }}  /></Col>
        </Row>
          <hr/>
          <br/>
          <br/>
          
          {this.state.data.map(
            (item,index) =>
              <Item data={item} key={index} onRemove={ () => this._remove(index)} />
            )
          }
        
        <div className="footer">
          <Button  type="dashed" style={{border:'0px'}} 
            onClick={this._add.bind(this)}
            name="Add item"><Icon type="plus-circle" theme="twoTone" />Add Item</Button>
          
        </div>
        </div>
        
      </div> 
      <div className="icons" >
        <Icon type="check"  style={{ fontSize: 35, color: '#31B404', backgroundColor:'#D0F5A9', borderRadius:'40%' }}/>
        {"\n"}
        <Icon type="close"  style={{ fontSize: 35, color: '#DF0101', backgroundColor:'#F5A9A9', borderRadius:'40%' }}/>
        {"\n"}
        <Icon type="right"  style={{ fontSize: 35, color: '#FFBF00', backgroundColor:'#F5DA81', borderRadius:'40%' }}/>
        {"\n"}
        <Icon type="calendar"  style={{ fontSize: 35, color: '#9A2EFE', backgroundColor:'#F2E0F7', borderRadius:'40%' }}/>
        {"\n"}
        <Icon type="tag"  style={{ fontSize: 35, color: '#01DFD7', backgroundColor:'#CEF6F5', borderRadius:'40%' }}/>
        {"\n"}
        <Icon type="search"  style={{ fontSize: 35, color: '#0174DF', backgroundColor:'#CEE3F6', borderRadius:'40%' }}/>
        {"\n"}
        <Icon type="download"  style={{ fontSize: 35, color: '#FA8258', backgroundColor:'#F5BCA9', borderRadius:'40%', }}/>
        
      </div>  
      </div>

    );
  }
}
 
export default App;