import {Component} from 'react'
import './index.css'
////////////12 th june  coding practice 5 light dark
class LightDarkMode extends Component {
  state = {status: true}

  active = () => {
    console.log('works')
    this.setState(previous => ({status: !previous.status}))
  }

  render() {
    const {status} = this.state

    let card
    if (status === true) {
      card = (
        <div className="card-dark">
          <h1 className="h-dark">Click To Change Mode</h1>

          <button type="button" className="but" onClick={this.active}>
            Light Mode
          </button>
        </div>
      )
    } else {
      card = (
        <div className="card-light">
          <h1 className="h-light">Click To Change Mode</h1>

          <button type="button" className="but" onClick={this.active}>
            Dark Mode
          </button>
        </div>
      )
    }

    return <div className="background">{card}</div>
  }
}

export default LightDarkMode
