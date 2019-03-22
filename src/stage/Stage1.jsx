import React from 'react'
import {connect} from 'react-redux'

import {
  success,
  failed
} from '../alert'

class Stage1 extends React.Component {

  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
    this.blink = this.blink.bind(this)
    this.showButton = this.showButton.bind(this)
  }

  blink() {
    const {buttonLeft, buttonTop, dispatch} = this.props  

    dispatch({
      type: 'STG_1_HIDE_BUTTON',
    })

    setTimeout(() => {
      const position = {
        buttonLeft, buttonTop
      }

      if (buttonLeft === 0 && buttonTop === 0) {
        position.buttonLeft = 300
      } else if (buttonLeft === 300 && buttonTop === 0) {
        position.buttonLeft = 0
        position.buttonTop = 100
      } else if (buttonLeft === 0 && buttonTop === 100) {
        position.buttonTop = 0
      }

      dispatch({
        type: 'STG_1_SHOW_BUTTON',
        payload: position,
      })
    }, 1000)
  }

  showButton() {
    const {buttonLeft, buttonTop, hideButton} = this.props
    const buttonStyle = {
      position: 'relative',
      left: buttonLeft,
      top: buttonTop,
    }

    if (hideButton) {
      return (
        <span style={buttonStyle}>
          Hilang???
        </span>
      )
    } else {
      return (
        <button
        style={buttonStyle}
        type='button'
        onClick={this.onClick}
        onMouseOver={this.blink}
        onFocus={this.blink}
        >
          Submit
        </button>
      )
    }
  }

  onClick() {
    const {onSuccess} = this.props

    const form = this.form
    const usernameValue = this.username.value
    const passwordValue = this.password.value
    const {username, password} = form.dataset

    if (usernameValue === username && passwordValue === password) {
      success('Berhasil')
      onSuccess()
    } else {
      failed('Username atau Password Salah')
    }
  }

  render() {
    return (
      <form  
      data-username='kawfee' 
      data-password='gruinti'
      ref={ref => this.form = ref}
      >
        <h6>Stage 1</h6>
        <label htmlFor='username'>Username</label>
        <br/>
        <input type='text' name='username' ref={ref => this.username = ref}/>
        <br/>
        <label htmlFor='password'>Password</label>
        <br/>
        <input type='password' name='password' ref={ref => this.password = ref}/>
        <br/>
        {this.showButton()}
      </form>
    )
  }
}

export default connect(state => state['stage1_data'])(Stage1)
