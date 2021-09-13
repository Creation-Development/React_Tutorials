import React, { Component } from 'react'

export class Input extends Component {
    render(props) {
        return (
            <div className="mb-3">
                <label htmlFor={this.props.field} className="form-label">{this.props.fieldname}</label>
                <input type="text" className="form-control" onChange={(e) => this.props.state[`${this.props.field}`]=(e.target.value)} id={this.props.field} aria-describedby="emailHelp" />
            </div>
        )
    }
}

export default Input

