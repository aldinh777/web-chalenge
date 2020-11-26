import React from 'react'
import {connect} from 'react-redux'

import {
  success,
  failed
} from '../alert'

class Stage4 extends React.Component {

  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    const {dispatch} = this.props

    this.interval = setInterval(() => {
      dispatch({
        type: 'STG_4_RANDOMIZE',
      })
    }, 200)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  random() {
    return Math.floor(Math.random() * 1000000)
  }

  onClick() {
    const {onSuccess} = this.props
    const {passwordAnswer, usernameAnswer} = this.props

    const usernameValue = this.username.value
    const passwordValue = this.password.value

    if (usernameValue === usernameAnswer && passwordValue === passwordAnswer) {
      success('Berhasil')
      onSuccess()
    } else {
      failed('Username atau Password Salah')
    }
  }

  render() {
    const {passwordAnswer, usernameAnswer} = this.props

    return (
      <form 
      data-username={usernameAnswer}
      data-password={passwordAnswer}
      >
        <h6>Stage 4</h6>
        <label htmlFor='username'>Username</label>
        <br/>
        <input type='text' name='username' ref={ref => this.username = ref}/>
        <br/>
        <label htmlFor='password'>Password</label>
        <br/>
        <input type='password' name='password' ref={ref => this.password = ref}/>
        <br/>
        <button
        type='button'
        onClick={this.onClick}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default connect(state => state['stage4_data'])(Stage4)
