import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App.jsx'
import storage from './storage'

ReactDOM.render(<Provider store={storage}>
  <App/>
</Provider>, document.querySelector('#main'))
