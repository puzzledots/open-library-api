import React, {Component} from 'react';

// Component
import Headings from './Headings';
import Rows from './Rows';

// resources
import * as timeago from 'timeago.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    setInterval( async () => {
      const res = await fetch('http://openlibrary.org/recentchanges.json?limit=10');
      const data = await res.json();
      // console.log(data);
      const formatData = this.formatData(data);
      // console.log(formatData);
      this.setState({
        data: formatData
      })
    },1000);
  }

  formatData(data){
    return data.map((data,i) => {
      return {
        "when": timeago.format(data.timestamp),
        "who": data.author.key,
        "description": data.comment
      }
    })
  }

  render(){
    // console.log(this.props.data)
    return (
      <div className="container p-4">
        <h1>{this.props.title}</h1>
        <table className="table table-bordered">
          <Headings headings={this.props.headings}/>
          <Rows data={this.state.data}/>
        </table>
      </div>
    )
  }

}

export default App;
