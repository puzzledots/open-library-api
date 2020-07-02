import React, {Component} from 'react';

// Components
import Row from './Row';

class Rows extends Component {

  render(){
    return (
      <tbody>
        {
          this.props.data.map( (row,i) => {
            return (
              <Row row={row} key={i}/>
            )
          })
        }
      </tbody>
    )
  }

}

export default Rows;
