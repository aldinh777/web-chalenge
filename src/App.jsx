import React from 'react'

class App extends React.Component {

  render() {
    return (
      <div>
        <label htmlFor='username'>Username</label>
        <br/>
        <input type='text' name='username' id='username'/>
        <br/>

        <label htmlFor='password'>Password</label>
        <br/>
        <input type='text' name='password'/>
        <br/>

        <button type="submit">Sign In</button>
      </div>
    )
  }
}

export default App
