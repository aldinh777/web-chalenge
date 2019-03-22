import React from 'react'

import {
  success,
  failed
} from '../alert'

class Stage1 extends React.Component {

  blink(e) {
    const form = document.querySelector('form')
    const button = e.target
    const hilang = document.createElement('span')

    hilang.style.position = 'relative'
    hilang.style.top = button.style.top
    hilang.style.left = button.style.left

    button.style.display = 'none'

    hilang.append('Hilang???')
    form.append(hilang)

    setTimeout(() => {
      const {left, top} = button.style

      if (left === '0px' && top === '0px') {
        button.style.left = '300px'
      } else if (left === '300px' && top === '0px') {
        button.style.left = '0px'
        button.style.top = '100px'
      } else if (left === '0px' && top === '100px') {
        button.style.top = '0px'
      }
      button.style.display = 'inline'
      hilang.remove()
    }, 1000)
  }

  onClick() {
    const form = document.querySelector('form')
    const usernameValue = document.querySelector('#username').value
    const passwordValue = document.querySelector('#password').value
    const {username, password} = form.dataset

    if (usernameValue !== username && passwordValue !== password) {
      failed('Username atau Password Salah')
    } else {
      success('Berhasil')
    }
  }

  render() {
    return (
      <form  
        data-username='kawfee' 
        data-password='gruinti'
      >
        <h6>Stage 1</h6>
        <label htmlFor='username'>Username</label>
        <br/>
        <input type='text' name='username' id='username'/>
        <br/>
        <label htmlFor='password'>Password</label>
        <br/>
        <input type='password' name='password' id='password'/>
        <br/>
        <button 
          style={{
            position: 'relative',
            top: 0,
            left: 0,
          }}
          type='button' 
          onClick={this.onClick}
          onMouseOver={this.blink}
          onFocus={this.blink}
        >Submit</button>
      </form>
    )
  }
}

export default Stage1
