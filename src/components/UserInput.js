import React, {Component} from 'react';

export default class UserInput extends Component {
    render() {
        const labelStyle = {
            backgroundColor: 'orange',
            padding: '5px',
            borderRadius: '2px'
        }

        const inputStyle = {
            marginLeft: '5px',
            padding: '10px',
            fontSize: '20px',
            border: 'none',
            borderRadius: '2px'
        }

        return(
            <div>
                <label htmlFor="inputUser" style={labelStyle}>Input Here</label>
                <input type="text" id="inputUser" onChange={this.props.change} style={inputStyle}/>
            </div>
        )
    }
}