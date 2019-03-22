import React from 'react'
import { connect } from 'react-redux'

import Stage1 from './stage/Stage1.jsx'
import Stage2 from './stage/Stage2.jsx'
import Stage3 from './stage/Stage3.jsx'
import Stage4 from './stage/Stage4.jsx'
import FinalStage from './stage/FinalStage.jsx'
import ExtraStage from './stage/ExtraStage.jsx'

class App extends React.Component {

  render() {
    const { stage } = this.props

    switch (stage) {
      case 1:
        return <Stage1/>
      case 2:
        return <Stage2/>
      case 3:
        return <Stage3/>
      case 4:
        return <Stage4/>
      case 'final':
        return <FinalStage/>
      case 'extra':
        return <ExtraStage/>
    }
    return null
  }
}

export default connect(state => state)(App)
