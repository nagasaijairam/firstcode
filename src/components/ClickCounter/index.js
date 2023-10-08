// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clicked = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background-div">
        <div className="main-div">
          <h1 className="heading-element">
            The Button has been clicked <span className="span1">{count}</span>{' '}
            times
          </h1>
          <p className="para-element">
            Click the button to increase the count!
          </p>
          <button className="btn" type="button" onClick={this.clicked}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
