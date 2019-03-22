import React from 'react'

import {
  success,
  failed
} from '../alert'

class Stage2 extends React.Component {

  render() {
    return (
      <form
      data-username='mario'
      data-password='luigi'
      >
        <h6>Stage 2</h6>
        <label htmlFor='username'>Username</label>
        <br/>
        <input type='text' name='username'/>
        <br/>
        <label htmlFor='password'>Password</label>
        <br/>
        <input type='password' name='password'/>
        <br/>
        <button
          type='button'
          onMouseOver={this.spread}
          onFocus={this.spread}
        >Submit</button>
      </form>
    )
  }
}

export default Stage2
