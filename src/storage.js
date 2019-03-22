import { createStore } from 'redux'

const initialState = {
  stage: 1,
  stage1_data: {
    buttonLeft: 0,
    buttonTop: 0,
    hideButton: false,
  },
  stage2_data: {
    spreadButton: false,
    startSpread: false,
    buttons: [
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
    ]
  }
}

function levelUp(stage) {
  if (typeof(stage) === 'number') {
    if (stage < 4) {
      return stage + 1
    } else {
      return 'final'
    }
  } else if (stage === 'final') {
    return 'extra'
  }
  return '???'
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LEVEL_UP':
      return {
        ...state,
        stage: levelUp(state.stage)
      }
    case 'STG_1_HIDE_BUTTON':
      return {
        ...state,
        stage1_data: {
          ...state.stage1_data,
          hideButton: true,
        }
      }
    case 'STG_1_SHOW_BUTTON':
      return {
        ...state,
        stage1_data: {
          ...action.payload,
          hideButton: false,
        }
      }
    case 'STG_2_SPREAD':
      return {
        ...state,
        stage2_data: {
          ...state.stage2_data,
          spreadButtons: true,
        }
      }
    case 'STG_2_START':
      return {
        ...state,
        stage2_data: {
          ...state.stage2_data,
          startSpread: true,
        }
      }
    case 'STG_2_CLICK':
      return {
        ...state,
        stage2_data: {
          ...state.stage2_data,
          buttons: action.payload
        }
      }
    case 'STG_2_RESET':
      return {
        ...state,
        stage2_data: {
          ...state.stage2_data,
          buttons: action.payload,
        }
      }
  }
  return state
}

export default createStore(reducer)
