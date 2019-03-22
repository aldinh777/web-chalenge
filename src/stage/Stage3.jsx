import React from 'react'
import {connect} from 'react-redux'

import {
  success,
  failed,
  info,
} from '../alert'

class Stage3 extends React.Component {

  constructor(props) {
    super(props)

    this.resetInterval = setInterval(() => {
      props.dispatch({
        type: 'STG_3_RESET'
      })
    }, 5000)
    setTimeout(() => {
      info('Klik Tombol Submit 1000x dalam 5 detik')
    }, 3000)
    this.raiseCounter = this.raiseCounter.bind(this)
  }

  raiseCounter() {
    const {dispatch, times, onSuccess} = this.props
    const form = this.form
    const usernameValue = this.username.value
    const passwordValue = this.password.value
    const {username, password} = form.dataset

    if (times >= 999) {
      if (usernameValue === username && passwordValue === password) {
        clearInterval(this.resetInterval)
        success('Berhasil')
        onSuccess()
      } else {
        failed('Username atau Password Salah')
      }
    }

    dispatch({
      type: 'STG_3_RAISE'
    })
  }

  render() {
    const {times} = this.props
    const buttonStyle = {
      padding: 100,
      fontSize: 100,
    }

    return (
      <form
      data-username='miyako'
      data-password='hinata'
      ref={ref => this.form = ref}
      >
        <h6>Stage 3 | Counter : {times}</h6>
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
        style={buttonStyle}
        onClick={this.raiseCounter}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default connect(state => state['stage3_data'])(Stage3)
