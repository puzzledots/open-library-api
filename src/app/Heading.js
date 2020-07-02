import React, {Component} from 'react';

class Heading extends Component {

  render(){
    return (
      <th className="table-success">{this.props.heading}</th>
    )
  }

}

export default Heading;
