import React, { Component } from 'react';
import { Button, Row, Col, Checkbox, Menu, Icon } from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
 
class Item extends Component{
    _remove(){
        if(this.props.onRemove)
            this.props.onRemove();
    }
    render(){
        return (
            
                <div className="name">
                    <Checkbox className="checkboxHover"  onChange={onChange} className="item-name">{this.props.data.name}</Checkbox>
                    <Button className="remove" onClick={this._remove.bind(this)}>
                    <Icon type="close" />
                </Button>
                <br/>
                <br/>
                </div>

            
        )
    }
}
 
 
export default Item;