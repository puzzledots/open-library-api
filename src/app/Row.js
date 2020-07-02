import React, {Component} from 'react';

class Row extends Component {

  render(){
    return (
      <tr>
        <td>{this.props.row.when}</td>
        <td>{this.props.row.who}</td>
        <td>{this.props.row.description}</td>
      </tr>
    )
  }

}

export default Row;
