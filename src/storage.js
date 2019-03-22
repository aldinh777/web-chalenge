import { createStore } from 'redux'

const initialState = {
  stage: 1,
  stage1_data: {
    buttonLeft: 0,
    buttonTop: 0,
    hideButton: false,
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
  }
  return state
}

export default createStore(reducer)
