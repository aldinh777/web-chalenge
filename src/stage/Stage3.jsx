import React from 'react'

import {
  success,
  failed
} from '../alert'

class Stage3 extends React.Component {

  render() {
    return (
      <form  >
        <h6>Stage 3</h6>
        <label htmlFor='username'>Username</label>
        <br/>
        <input type='text' name='username' id='username'/>
        <br/>
        <label htmlFor='password'>Password</label>
        <br/>
        <input type='password' name='password' id='password'/>
        <br/>
        <button type='button'>Submit</button>
      </form>
    )
  }
}

export default Stage3
