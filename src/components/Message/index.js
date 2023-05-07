import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: true}

  buttonClick = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  changeText = () => {
    const {isLoggedIn} = this.state

    return isLoggedIn ? 'Please Login' : 'Welcome User'
  }

  changeButtonText = () => {
    const {isLoggedIn} = this.state

    return isLoggedIn ? 'Login' : 'Logout'
  }

  render() {
    const text = this.changeText()

    const buttonText = this.changeButtonText()

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">{text}</h1>
          <button onClick={this.buttonClick} className="button" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
