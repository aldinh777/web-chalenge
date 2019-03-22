import React from 'react'
import { connect } from 'react-redux'

import Stage1 from './stage/Stage1.jsx'
import Stage2 from './stage/Stage2.jsx'
import Stage3 from './stage/Stage3.jsx'
import Stage4 from './stage/Stage4.jsx'
import FinalStage from './stage/FinalStage.jsx'
import ExtraStage from './stage/ExtraStage.jsx'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.levelUp = this.levelUp.bind(this)
  }

  levelUp() {
    const {dispatch} = this.props

    dispatch({
      type: 'LEVEL_UP'
    })
  }

  render() {
    const { stage } = this.props

    switch (stage) {
      case 1:
        return <Stage1 onSuccess={this.levelUp}/>
      case 2:
        return <Stage2 onSuccess={this.levelUp}/>
      case 3:
        return <Stage3 onSuccess={this.levelUp}/>
      case 4:
        return <Stage4 onSuccess={this.levelUp}/>
      case 'final':
        return <FinalStage onSuccess={this.levelUp}/>
      case 'extra':
        return <ExtraStage onSuccess={this.levelUp}/>
    }
    return null
  }
}

export default connect(state => state)(App)
