import React, { Component } from 'react';
import { Button, Tooltip } from 'antd';

 
class Item extends Component{
    _remove(){
        if(this.props.onRemove)
            this.props.onRemove();
    }
    render(){
        return (
            
                <div className="name">
                    <Button size="small" type="danger" icon="check"  style={{   fontSize: 10, color: 'white',  }} className="remove" onClick={this._remove.bind(this)}></Button>
                    {"\n"}
                    <Tooltip title="2 days ago"  >
                        {this.props.data.name}
                    </Tooltip>
                <br/>
                <br/>
                </div>

            
        )
    }
}
 
 
export default Item;