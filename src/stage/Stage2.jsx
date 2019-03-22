import React from 'react'
import {connect} from 'react-redux'

import {
  success,
  failed,
  info,
} from '../alert'

class Stage2 extends React.Component {

  constructor(props) {
    super(props)

    this.bunshin = this.bunshin.bind(this)
    this.click = this.click.bind(this)
    this.spread = this.spread.bind(this)
    this.showSpreadButton = this.showSpreadButton.bind(this)
  }

  bunshin(i, j, status) {
    const {startSpread} = this.props

    const duration = 1000
    const effect = 'ease-in-out'
    const buttonStyle = {
      transition: `top ${duration}ms ${effect}, left ${duration}ms ${effect}`,
      position: 'absolute',
    }

    return (
      <button
      type='button'
      onClick={() => this.click(i, j)}
      key={i.toString() + j.toString()}
      style={{
        ...buttonStyle,
        backgroundColor: status ? 'lightgreen' : 'orange',
        top: startSpread ? i * 30 : 0,
        left: startSpread ? j * 80 : 0
      }}
      >
        Bunshin
      </button>
    )
  }

  spread() {
    const {dispatch} = this.props

    dispatch({
      type: 'STG_2_SPREAD'
    })
  }

  click(i, j) {
    const {buttons, dispatch, onSuccess} = this.props
    const form = this.form
    const usernameValue = this.username.value
    const passwordValue = this.password.value
    const {username, password} = form.dataset

    buttons[i][j] = true

    let completed = true
    buttons.forEach(subArray => {
      subArray.forEach(status => {
        if (!status) {
          completed = false
        } 
      })
    })

    dispatch({
      type: 'STG_2_CLICK',
      payload: [...buttons]
    })      

    if (completed) {
      if (usernameValue === username && passwordValue === password) {
        clearInterval(this.resetInterval)
        success('Berhasil')
        onSuccess()
      } else {
        failed('Username atau Password Salah')
      }
    }
  }

  showSpreadButton() {
    const {buttons, spreadButtons, startSpread, dispatch} = this.props

    if (!spreadButtons) {
      return (
        <button
        type='button'
        onMouseOver={this.spread}
        onFocus={this.spread}
        >
          Submit
        </button>
      )
    } else {
      if (!startSpread) {
        setTimeout(() => {
          dispatch({
            type: 'STG_2_START'
          })
          info('Klik Semua Tombol dalam 5 detik')
          this.resetInterval = setInterval(() => {
            dispatch({
              type: 'STG_2_RESET',
              payload: buttons.map(subArray => {
                return subArray.map(_ => false)
              })
            })
          }, 5000)
        }, 100)
      }
      return (
        <div style={{position: 'relative'}}>
          {buttons.map((subArray, i) => {
            return subArray.map((status, j) => {
              return this.bunshin(i, j, status)
            })
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <form
      data-username='mario'
      data-password='luigi'
      ref={ref => this.form = ref}
      >
        <h6>Stage 2</h6>
        <label htmlFor='username'>Username</label>
        <br/>
        <input type='text' name='username' ref={ref => this.username = ref}/>
        <br/>
        <label htmlFor='password'>Password</label>
        <br/>
        <input type='password' name='password' ref={ref => this.password = ref}/>
        <br/>
        {this.showSpreadButton()}
      </form>
    )
  }
}

export default connect(state => state['stage2_data'])(Stage2)
