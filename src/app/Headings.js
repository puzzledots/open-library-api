import React, {Component} from 'react';

// Component
import Heading from './Heading';

class Headings extends Component {

  render(){
    // console.log(this.props.headings)
    return (
      <thead>
        <tr>
          {
            this.props.headings.map( (heading,i) => {
              return (
                <Heading heading={heading} key={i}/>
              )
            })
          }
        </tr>
      </thead>
    )
  }

}

export default Headings;
